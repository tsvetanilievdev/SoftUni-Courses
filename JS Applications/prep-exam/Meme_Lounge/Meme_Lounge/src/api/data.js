import * as api from './api.js';

const endpoints = {
    memesDesc: '/data/memes?sortBy=_createdOn%20desc',
    memes: '/data/memes',
    memeById: (id) => `/data/memes/${id}`,
    myMemes: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`


}

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll(){
    return api.get(endpoints.memesDesc)
}

export async function getAllMyMemes(userId){
    return api.get(endpoints.myMemes(userId))
}

export async function getOneById(id){
    return api.get(endpoints.memeById(id));
}

export async function createMeme(data){
    return api.post(endpoints.memes, data);
}

export async function deleteMemeById(id){
    return api.del(endpoints.memeById(id));
}

export async function updateMeme(id, data){
    return api.update(endpoints.memeById(id), data);
}