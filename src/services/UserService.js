import http from './HttpService';

const apiEndpoint = 'http://localhost:3900/api/users';

export function register(user) {
    return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name
    })
}