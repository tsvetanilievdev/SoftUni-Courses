import * as api from './api.js';

//TO DO... change endpoints
const endpoints = {
    booksDesc: '/data/books?sortBy=_createdOn%20desc', //get all at descending order
    books: '/data/books', // create, getAll
    bookById: (id) => `/data/books/${id}`, // getOne, update(edit), delete 
    mybooks: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc` // getMy

}

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll(){
    return api.get(endpoints.booksDesc)
}

export async function getAllMyItems(userId){
    return api.get(endpoints.mybooks(userId))
}

export async function getOneById(id){
    return api.get(endpoints.bookById(id));
}

export async function createItem(data){
    return api.post(endpoints.books, data);
}

export async function deleteItemById(id){
    return api.del(endpoints.bookById(id));
}

export async function updateItem(id, data){
    return api.update(endpoints.bookById(id), data);
}