import {configApi} from "./constants.js"

class Api{
    constructor ({url, headers}) {
        this.url = url;
        this.headers = headers
};

getUserInfo() {
<<<<<<< HEAD
<<<<<<< HEAD
    return fetch (`${this.url}/users/me`, {
        credentials: "include",    
        headers: this.headers
=======
    return fetch (`${this.url}users/me`, {
            headers: this.headers
>>>>>>> refs/remotes/origin/main
=======
    return fetch (`${this.url}users/me`, {
            headers: this.headers
=======
    return fetch (`${this.url}/users/me`, {
        credentials: "include",    
        headers: this.headers
>>>>>>> main
>>>>>>> develop
    })
    .then(this._checkResponse)
};

getTasksCards() {
<<<<<<< HEAD
<<<<<<< HEAD
    return fetch (`${this.url}/cards`, {
        credentials: "include",    
        headers: this.headers
=======
    return fetch (`${this.url}cards`, {
            headers: this.headers
>>>>>>> refs/remotes/origin/main
=======
    return fetch (`${this.url}cards`, {
            headers: this.headers
=======
    return fetch (`${this.url}/cards`, {
        credentials: "include",    
        headers: this.headers
>>>>>>> main
>>>>>>> develop
    })
    .then(this._checkResponse)
};

addUser(inputsUserHandle) {
    const body = {about: inputsUserHandle.about, name: inputsUserHandle.name}
<<<<<<< HEAD
<<<<<<< HEAD
    return fetch (`${this.url}/users/me`, {
        credentials: "include",    
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(body)
=======
=======
>>>>>>> develop
    return fetch (`${this.url}users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(body)
<<<<<<< HEAD
>>>>>>> refs/remotes/origin/main
=======
=======
    return fetch (`${this.url}/users/me`, {
        credentials: "include",    
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(body)
>>>>>>> main
>>>>>>> develop
            }
    )
    .then(this._checkResponse)
};

addCard(inputsValue) {
    const body = {name: inputsValue.name, link: inputsValue.link}
<<<<<<< HEAD
<<<<<<< HEAD
    return fetch (`${this.url}/cards`, {
        credentials: "include",
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
        }
=======
=======
>>>>>>> develop
    return fetch (`${this.url}cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
            }
<<<<<<< HEAD
>>>>>>> refs/remotes/origin/main
=======
=======
    return fetch (`${this.url}/cards`, {
        credentials: "include",
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
        }
>>>>>>> main
>>>>>>> develop
    )
    .then(this._checkResponse)
};

deleteCard(cardId) {
<<<<<<< HEAD
<<<<<<< HEAD
    return fetch (`${this.url}/cards/${cardId}`,{
        credentials: "include",
=======
    return fetch (`${this.url}cards/${cardId}`,{
>>>>>>> refs/remotes/origin/main
=======
    return fetch (`${this.url}cards/${cardId}`,{
=======
    return fetch (`${this.url}/cards/${cardId}`,{
        credentials: "include",
>>>>>>> main
>>>>>>> develop
        method: 'DELETE',
        headers: this.headers,
    })
    .then(this._checkResponse)
};

likePut(cardId) {
<<<<<<< HEAD
<<<<<<< HEAD
    return fetch (`${this.url}/cards/${cardId}/likes`,{
        credentials: "include",
=======
    return fetch (`${this.url}cards/${cardId}/likes`,{
>>>>>>> refs/remotes/origin/main
=======
    return fetch (`${this.url}cards/${cardId}/likes`,{
=======
    return fetch (`${this.url}/cards/${cardId}/likes`,{
        credentials: "include",
>>>>>>> main
>>>>>>> develop
        method: 'PUT',
        headers: this.headers,
    })
    .then(this._checkResponse)
};

likeUnPut(cardId) {
<<<<<<< HEAD
<<<<<<< HEAD
    return fetch (`${this.url}/cards/${cardId}/likes`,{
        credentials: "include",
=======
    return fetch (`${this.url}cards/${cardId}/likes`,{
>>>>>>> refs/remotes/origin/main
=======
    return fetch (`${this.url}cards/${cardId}/likes`,{
=======
    return fetch (`${this.url}/cards/${cardId}/likes`,{
        credentials: "include",
>>>>>>> main
>>>>>>> develop
        method: 'DELETE',
        headers: this.headers,
    })
    .then(this._checkResponse)
};

avatar(data) {
<<<<<<< HEAD
<<<<<<< HEAD
    return fetch (`${this.url}/users/me/avatar`, {
        credentials: "include",
=======
    return fetch (`${this.url}users/me/avatar`, {
>>>>>>> refs/remotes/origin/main
=======
    return fetch (`${this.url}users/me/avatar`, {
=======
    return fetch (`${this.url}/users/me/avatar`, {
        credentials: "include",
>>>>>>> main
>>>>>>> develop
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(data)
        })
        .then(this._checkResponse)
};

_checkResponse(res) {
    if (res.ok) {
        return res.json();
     }
     return Promise.reject(`Ошибка: ${res.status}`);
}

};

const api = new Api ({
    url: configApi.baseUrl,
    headers: configApi.headers
  }
);

export default api;