

import { BehaviorSubject } from 'rxjs';
import { get, post } from '../http_config/http.service'
import { jwtDecode } from 'jwt-decode';


let currentUserFromStorage
const currentUserSubject = new BehaviorSubject(currentUserFromStorage || undefined);
const currentOrganizationSubject = new BehaviorSubject(
    (currentUserFromStorage && currentUserFromStorage._org && currentUserFromStorage._org[0]) || undefined
);

try {
    currentUserFromStorage = localStorage.getItem('AuthenticationToken');
    currentUserFromStorage = JSON.parse(currentUserFromStorage);
    if (currentUserFromStorage) {
        // loadCurrentUser();
        const decoded = jwtDecode(currentUserFromStorage);
        console.log(decoded);
        currentUserSubject.next({ token: currentUserFromStorage, role: decoded?.role }) // this line is just a jugad to avoid loadCurrent user from the function
    }

} catch (e) {
    logout();
}


export const authenticationService = {
    login,
    logout,
    refreshTokenHandler,
    // loadCurrentUser,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value;
    },
};

async function login(data) {
    await post('/user/login', data)
        .then(response => {
            // Cookie.set('_token', response.token, { path: '/' })
            localStorage.setItem('AuthenticationToken', JSON.stringify(response.data))
            const decoded = jwtDecode(response.data);

            currentUserSubject.next({ token: response.data, role: decoded?.role })

            // currentOrganizationSubject.next(response.user._org[0])

            if (response.user) {
                // history.push(paths.defaultPostLogin)
            }
            return response
        })

}

async function refreshTokenHandler() {
    await post('/user/refresh')
        .then(response => {

            localStorage.setItem('AuthenticationToken', JSON.stringify(response))

            currentUserSubject.next(response)

            if (response.user) {
                // history.push(paths.defaultPostLogin)
            }
            return response
        })
        .catch(e => { logout(); window.location.reload() })
}

function logout() {

    localStorage.removeItem('AuthenticationToken')

    // Cookie.remove('_token', { path: '/' })

    currentUserSubject.next(undefined)

    if (window.location.pathname !== '/login') {
        // window.location.href = "/login"
        // window.location.reload()
    }
}

function loadCurrentUser() {
    get(`/user/self`).then((response) => {
        localStorage.setItem('AuthenticationToken', JSON.stringify(response.token))
        currentUserSubject.next(response)
        // currentOrganizationSubject.next(response._org[0])
    }).catch(err => logout())
}

