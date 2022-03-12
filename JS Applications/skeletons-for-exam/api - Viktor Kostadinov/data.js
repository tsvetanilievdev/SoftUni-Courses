import * as api from './api.js'

//сетваме host
const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//implement application specific requests