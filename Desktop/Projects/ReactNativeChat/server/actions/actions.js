const url = 'http://localhost:4050/api/';
const randomToken = require('random-token')

export function createUser(user) {
  return fetch(`${ url }signUp`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then((response) => response.json())
  .catch((err) => console.log(err))
};

export function authUser(user) {
  return fetch(`${ url }signIn`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then((response) => response.json())
  .catch((err) => console.log(err))
};

export function editProfile(userId, editedUser) {
  return fetch(`${url}users/${userId}`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedUser)
  })
  .then((response) => response.json())
  .catch((err) => console.log(err))
};

export function getUsers() {
  return fetch(`${url}users`)
  .then((res) => res.json())
  .catch((err) => console.log(err))
};
export function getValidUser(id) {
  return fetch(`${url}validUser/${ id }`)
  .then((res) => res.json())
  .catch((err) => console.log(err))
};

export function changePassword(id, editedUser) {
  return fetch(`${ url }changePassword/${ id }`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedUser)
  })
  .then((response) => response.json())
  .catch((err) => console.log(err))
};

export function createFriendship(friendship) {
  return fetch(`${ url }newFriendship`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(friendship)
  })
  .then((response) => response.json())
  .catch((err) => console.log(err))
};