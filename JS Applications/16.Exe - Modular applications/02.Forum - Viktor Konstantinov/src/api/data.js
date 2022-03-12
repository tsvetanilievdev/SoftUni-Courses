import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    topics: '/data/topics',
    create: '/data/topics'

}

export async function getAllTopics(){
    return api.get(endpoints.topics) 
}

export async function createPost(topic){
    return api.post(endpoints.create, topic)
}