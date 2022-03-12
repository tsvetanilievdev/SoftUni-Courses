import * as api from './api.js'

const host = 'http://localhost:3030';
api.settings.host = host;


export async function login(email, password){
    const result = await api.post(host + '/users/login', {email, password});
    removeUser();
    saveUser(result);
    return result;
}
export async function register(email, password){
    const result = await api.post(host + '/users/register', {email, password});
    removeUser();
    saveUser(result);
    return result;
}
export async function logout(){
    await api.post(host + '/users/logout');
    removeUser()
}
export async function createItem(data){
    return await api.post(host + '/data/catalog', data);
}
export async function getAllFurniture(){
    return await api.get(host + '/data/catalog');
}
export async function getItemById(id){
    return await api.get(host + '/data/catalog/' + id);
}
export async function updateItemById(id,data){
    return await api.put(host + '/data/catalog/' + id, data);
}
export async function deleteItemById(id){
    return await api.del(host + '/data/catalog/' + id);
}
export async function getMyFurniture(userId){
    return await api.get(host + `/data/catalog?where=_ownerId%3D%22${userId}%22`);
}

function saveUser(user){
    sessionStorage.setItem('userId', user._id);
    sessionStorage.setItem('authToken', user.accessToken);
    sessionStorage.setItem('email', user.email);
}
function removeUser(){
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('email');
}