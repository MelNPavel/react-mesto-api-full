import {configApi} from "./constants.js"

class Api{
    constructor ({url, headers}) {
        this.url = url;
        this.headers = headers
};

getUserInfo() {
<<<<<<< HEAD
    return fetch (`${this.url}/users/me`, {
        credentials: "include",    
        headers: this.headers
=======
    return fetch (`${this.url}users/me`, {
            headers: this.headers
>>>>>>> refs/remotes/origin/main
    })
    .then(this._checkResponse)
};

getTasksCards() {
<<<<<<< HEAD
    return fetch (`${this.url}/cards`, {
        credentials: "include",    
        headers: this.headers
=======
    return fetch (`${this.url}cards`, {
            headers: this.headers
>>>>>>> refs/remotes/origin/main
    })
    .then(this._checkResponse)
};

addUser(inputsUserHandle) {
    const body = {about: inputsUserHandle.about, name: inputsUserHandle.name}
<<<<<<< HEAD
    return fetch (`${this.url}/users/me`, {
        credentials: "include",    
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(body)
=======
    return fetch (`${this.url}users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(body)
>>>>>>> refs/remotes/origin/main
            }
    )
    .then(this._checkResponse)
};

addCard(inputsValue) {
    const body = {name: inputsValue.name, link: inputsValue.link}
<<<<<<< HEAD
    return fetch (`${this.url}/cards`, {
        credentials: "include",
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
        }
=======
    return fetch (`${this.url}cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
            }
>>>>>>> refs/remotes/origin/main
    )
    .then(this._checkResponse)
};

deleteCard(cardId) {
<<<<<<< HEAD
    return fetch (`${this.url}/cards/${cardId}`,{
        credentials: "include",
=======
    return fetch (`${this.url}cards/${cardId}`,{
>>>>>>> refs/remotes/origin/main
        method: 'DELETE',
        headers: this.headers,
    })
    .then(this._checkResponse)
};

likePut(cardId) {
<<<<<<< HEAD
    return fetch (`${this.url}/cards/${cardId}/likes`,{
        credentials: "include",
=======
    return fetch (`${this.url}cards/${cardId}/likes`,{
>>>>>>> refs/remotes/origin/main
        method: 'PUT',
        headers: this.headers,
    })
    .then(this._checkResponse)
};

likeUnPut(cardId) {
<<<<<<< HEAD
    return fetch (`${this.url}/cards/${cardId}/likes`,{
        credentials: "include",
=======
    return fetch (`${this.url}cards/${cardId}/likes`,{
>>>>>>> refs/remotes/origin/main
        method: 'DELETE',
        headers: this.headers,
    })
    .then(this._checkResponse)
};

avatar(data) {
<<<<<<< HEAD
    return fetch (`${this.url}/users/me/avatar`, {
        credentials: "include",
=======
    return fetch (`${this.url}users/me/avatar`, {
>>>>>>> refs/remotes/origin/main
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