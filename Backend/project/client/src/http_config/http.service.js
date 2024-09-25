import axios from 'axios';
import axiosInstance from './intercepter';

export async function fetchData(endpoint, method = 'GET', body = null) {

    const options = {
        method: method,
    };
    if (body) {
        options.data = body;
    }
    const response = await axiosInstance(endpoint, options);
    const data = response;

    return data;
}

export function get(endpoint) {
    return fetchData(endpoint);
}

export function post(endpoint, body) {
    return fetchData(endpoint, 'POST', body);
}

export function put(endpoint, body) {
    return fetchData(endpoint, 'PUT', body);
}

export function del(endpoint) {
    return fetchData(endpoint, 'DELETE');
}
