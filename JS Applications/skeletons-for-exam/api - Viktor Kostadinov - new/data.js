import * as api from './api.js'

// data.js знае каква е формата на колекциите, как се казват, какви свойства имат, и тнт
// data.js предоставя тези данни на отделните модули

const endpoints = {
    movies: '/data/movies'
}

//импортираме и веднага експортираме в същия вид, за да може да ги взимаме от data.js; идеята е всичко да минава през data;
export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// data.js е посредник между този файл който прави заявикте(api.js) и този, който го визуализира(app.js или някакъв модул);
export async function getAll(){
    await api.get(endpoints.movies);
}