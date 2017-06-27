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

export function addFriend(id, invitedUsrId) {
  return fetch(`${ url }userFriendship/${ id }`, {
    method: "PUT",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ friendId: invitedUsrId })
  })
  .then((response) => response.json())
  .catch((err) => console.log(err))
};

export function changeOnlineStatus(id) {
  return fetch(`${ url }onlineStatus/${ id }`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
  .then((response) => response.json)
  .catch((err) => console.log(err))
};

export function getUserThreads(name) {
  return fetch(`${ url }getUserThreads/${ name }`, {
    method: "GET",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
  .then((response) => response.json())
  .catch((err) => console.log(err))
};

export function gotoThread(_firstName, _secondName) {
  return fetch(`${ url }thread`, {
    method: "PUT",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: _firstName,
      secondName: _secondName
    })
  })
  .then((response) => response.json())
  .catch((err) => console.log(err))
};

export function getThreadMessages(threadId) {
  return fetch(`${ url }getThreadMessages/${ threadId }`, {
    method: "GET",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    }
  })
  .then((response) => response.json())
  .catch((err) => console.log(err))
};

export function createMessage(threadId, msgObject) {
  return fetch(`${ url }thread/${ threadId }/newMsg`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(msgObject)
  })
  .then((response) => response.json)
  .catch((err) => console.log(err))
};