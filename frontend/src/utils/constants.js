const config = {
    formSelector: '.popup__form',
    inputType: '.popup__input',
    buttonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disable',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};

const baseUrl = "https://api.mestofullgha.nomorepartiesxyz.ru";
const myJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY0MTUyMTYzOTBhNDAwMTQ2OTYxMDkiLCJpYXQiOjE2NjAxNjM1MDN9.nMr1EsDiPO1LmmC1oksqDJ3elyXwpbkbU7NEKQBeuH4";

const configApi = {
  baseUrl: "https://api.mestofullgha.nomorepartiesxyz.ru",
  headers: {    
    // authorization: '86b10ee1-81f7-46f9-8c08-51d061f72e78',
    'Content-Type': 'application/json'
  },
};

const userAvatar = '.profile__avatar'
const userName ='.profile__info-name';
const userAbout ='.profile__info-about';
const userData = {
  name: userName,
  about: userAbout,
  avatar: userAvatar
};

export {
    config,
    configApi,
    userAvatar,
    userName,
    userAbout,
    userData,
    baseUrl,
    myJwt,
}