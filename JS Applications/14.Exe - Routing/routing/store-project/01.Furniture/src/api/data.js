import * as api from './api.js';

const host = 'http://localhost:3030'
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//implentation of specific requests
export async function getAllFurnitures(search) {
    if(search){
        return await api.get(host + '/data/catalog?where=' + encodeURIComponent(`make LIKE "${search}"`)); // търсим по 'make'

    }else {
        return await api.get(host + '/data/catalog');
    }
}

export async function createFurniture(data) {
    return await api.post(host + '/data/catalog', data)
}

export async function getFurnitureById(id) {
    return await api.get(host + '/data/catalog/' + id)
}

export async function updateFurnitureById(id, data) {
    return await api.put(host + '/data/catalog/' + id, data)
}
export async function deleteFurnitureById(id) {
    return await api.del(host + '/data/catalog/' + id)
}
export async function getMyFurniture() {
    const userId = sessionStorage.getItem('userId')
    return await api.get(host + `/data/catalog?where=_ownerId%3D%22${userId}%22`);
}