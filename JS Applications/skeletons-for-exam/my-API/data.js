import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll(){
    return await api.get('/data/movies');
}
export async function getAllIdTitleImg(){ // select={property}%2C{property}%2C{property} - без кавичиките
    return await api.get('/data/movies?select=_id%2Ctitle%2Cimg');
}

export async function getAllTitleSortedDesc(){ // select={property}&sortBy=_createdOn%20desc - без кавичиките
    return await api.get('/data/movies?select=%2Cimg&sortBy=_createdOn%20desc');
}

export async function getOneById(id){
    return await api.get(`/data/movies/${id}`);
}

export async function createItem(data){
    return await api.post('/data/movies', data);
}

export async function updateitemById(id, data){
    return await api.update(`/data/movies/${id}`, data)
}

export async function deleteItemById(id){
    return await api.del(`/data/movies/${id}`);
}