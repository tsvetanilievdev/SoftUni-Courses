import * as api from './api.js';

//TO DO... change endpoints
const endpoints = {
    gamesDesc: '/data/games?sortBy=_createdOn%20desc', //get all at descending order
    gamesDescCategory: '/data/games?sortBy=_createdOn%20desc&distinct=category', //get all at descending order
    games: '/data/games', // create, getAll
    gameById: (id) => `/data/games/${id}`, // getOne, update(edit), delete 
    mygames: (userId) => `/data/games?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, // getMy
    allComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    comments: '/data/comments'
}

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllDescCategory(){
    return api.get(endpoints.gamesDescCategory)
}
export async function getAll(){
    return api.get(endpoints.gamesDesc)
}

export async function getAllMyItems(userId){
    return api.get(endpoints.mygames(userId))
}

export async function getOneById(id){
    return api.get(endpoints.gameById(id));
}

export async function createItem(data){
    return api.post(endpoints.games, data);
}

export async function deleteItemById(id){
    return api.del(endpoints.gameById(id));
}

export async function updateItem(id, data){
    return api.update(endpoints.gameById(id), data);
}

export async function getAllComments(gameId){
    return api.get(endpoints.allComments(gameId));
}

export async function postComment(gameId,comment){
    return api.post(endpoints.comments,{gameId, comment})
}