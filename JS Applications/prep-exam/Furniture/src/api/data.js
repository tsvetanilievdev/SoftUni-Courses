import * as api from './api.js';

const endpoints = {
    catalog: '/data/catalog'
}

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll(){
    return await api.get(endpoints.catalog);
}
export async function getAllIdTitleImg(){ // select={property}%2C{property}%2C{property} - без кавичиките
    return await api.get(`${endpoints.catalog}?select=_id%2Ctitle%2Cimg`);
}

export async function getAllTitleSortedDesc(){ // select={property}&sortBy=_createdOn%20desc - без кавичиките
    return await api.get(`${endpoints.catalog}?select=%2Cimg&sortBy=_createdOn%20desc`);
}

export async function getAllMyItemsByUserId(userId){ 
    return await api.get(`${endpoints.catalog}?where=_ownerId%3D%22${userId}%22`);
}

export async function getOneById(id){
    return await api.get(`${endpoints.catalog}/${id}`);
}

export async function createItem(data){
    return await api.post(endpoints.catalog, data);
}

export async function updateitemById(id, data){
    return await api.update(`${endpoints.catalog}/${id}`, data)
}

export async function deleteItemById(id){
    return await api.del(`${endpoints.catalog}/${id}`);
}