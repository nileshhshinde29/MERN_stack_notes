import axios from 'axios'
import { post } from './http.service';
import { authenticationService } from '../services/auth.service';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your API base URL
    withCredentials: true,
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {

        const token = JSON.parse(localStorage.getItem('AuthenticationToken'))
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        console.log('req error')
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && [401, 403].includes(error.response.status)) {
            authenticationService.refreshTokenHandler()
        }
        console.log('res error')

        return Promise.reject((error))
    }
);

export default axiosInstance;;
