import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config) => {
    config.url = `${config.url}?key=AIzaSyBUhCmtlD112Wiv8VJ-m0Np9vo4Mwb4QEk`

    return config;
});

export default instance;