const url = 'http://localhost:4000/api/';
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
  .then((response) => response.json)
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
};

export function createThread(thread) {
  return fetch(`${ url }thread`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(thread)
  })
  .then((response) => response.json)
};

export function addNewMsgToThread(threadId, msg) {
  return fetch(`${ url }thread/${ threadId }`, {
    method: "PUT",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(msg)
  })
  .then((response) => response.json)
};

export function addNewFriend(friendship) {
  return fetch(`${ url }friendships`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(friendship)
  })
  .then((response) => response.json)
};

export function deleteFriendship(friendshipId) {
  return fetch(`${ url }friendships/${ friendShipId }`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: null
  })
  .then((response) => response.json)
};

export function editProfile(userId, editedUser) {
  return fetch(`${url}users/${userId}`, {
    method: "PUT",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedUser)
  })
  .then((response) => response.json)
};

export function getUsers() {
  return fetch(`${url}users`).then((res) => res.json())
};
export function getValidUser(id) {
  return fetch(`${url}validUser/${ id }`).then((res) => res.json())
};