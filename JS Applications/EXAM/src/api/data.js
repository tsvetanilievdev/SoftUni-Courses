import * as api from './api.js';

//TO DO... change endpoints
const endpoints = {
    theatersDescDistinct: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    theaters: '/data/theaters', // create, getAll
    theaterById: (id) => `/data/theaters/${id}`, // getOne, update(edit), delete 
    myTheaters: (userId) => `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, // getMy
    like: `/data/likes`,
    likesCount: (theaterId) => `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
    likeFromUser: (theaterId, userId) => `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll(){
    return api.get(endpoints.theatersDescDistinct)
}

export async function getAllMyItems(userId){
    return api.get(endpoints.myTheaters(userId))
}

export async function getOneById(id){
    return api.get(endpoints.theaterById(id));
}

export async function createItem(data){
    return api.post(endpoints.theaters, data);
}

export async function deleteItemById(id){
    return api.del(endpoints.theaterById(id));
}

export async function updateItem(id, data){
    return api.update(endpoints.theaterById(id), data);
}

export async function likeItem(theaterId){
    return api.post(endpoints.like, {theaterId});
}

export async function getAllLikes(theaterId){
    return api.get(endpoints.likesCount(theaterId));
}

export async function getLikeFromUser(theaterId, userId){
    return api.get(endpoints.likeFromUser(theaterId,userId));
}