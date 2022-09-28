import { baseUrl } from "./constants.js";


const checkResponse = (res) => 
  res.ok ? 
    res.json()
    : Promise.reject(new Error(`Ошибка ${res.status}: ${res.statusText}`));

export const auth = (email, password) => {
  return fetch(`${baseUrl}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: {      
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => checkResponse(res))
};

export const authorize = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'origin': 'https://mestofullgha.nomorepartiesxyz.ru',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => checkResponse(res))
};

export const getContent = () => {
  return fetch(`${baseUrl}/users/me`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'origin': 'https://mestofullgha.nomorepartiesxyz.ru',
      'Accept': 'application/json',
    }
  })
  .then(res => checkResponse(res))
};

export const logout = () => {
  return fetch(`${baseUrl}/onlogout`, {
      method: 'POST',
      headers: {        
        'Content-Type': 'application/json'
      },
      credentials: 'include',
  })
  .then(res => checkResponse(res));
};
