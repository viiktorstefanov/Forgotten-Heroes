import request from "./Request";

const endpoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
};

async function login() {
    await request.get(endpoints.login)
}