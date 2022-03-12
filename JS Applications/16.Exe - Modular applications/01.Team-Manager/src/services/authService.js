import * as api from './api.js';
const host = 'http://localhost:3030';

export async function login(email, password) {
  const data = { email, password };
  const result = await api.post(host + '/users/login', data);
  removeToken();
  saveToken(result);
  return result;
}
export async function register(email, username, password) {
  const result = await api.post(host + '/users/register', {
    email,
    username,
    password,
  });
  removeToken();
  saveToken(result);
  return result;
}
export async function logout() {
  await api.get(host + '/users/logout');
  removeToken();
}

export async function getAllTeams() {
  return await api.get(host + '/data/teams');
}

export async function getTeamById(id) {
  return await api.get(host + '/data/teams/' + id);
}

export async function getTeamsMembersById(idsArray) {
  const query = ``;
  return await api.get(
    host + `/data/members?where=teamId IN ("${id}") AND status%3D"member"`
  );
}

export async function getAllMembers() {
  return await api.get(host + '/data/members?where=status%3D%22member%22');
}

export async function createTeam(name, logoUrl, description) {
  return await api.post(host + '/data/teams', { name, logoUrl, description });
}

export async function updateTeamById(id, team) {
  return await api.put(host + '/data/teams/' + id, team);
}

function saveToken(data) {
  sessionStorage.setItem('authToken', data.accessToken);
  sessionStorage.setItem('email', data.email);
  sessionStorage.setItem('userId', data._id);
  sessionStorage.setItem('username', data.username);
}
function removeToken() {
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('username');
}
function isAuth() {
  const token = sessionStorage.getItem('authToken');
  return token ? true : false;
}

export default {
  login,
  register,
  logout,
  isAuth,
  getAllTeams,
  createTeam,
  getTeamMembersById,
  getAllMembers,
  updateTeamById
};
