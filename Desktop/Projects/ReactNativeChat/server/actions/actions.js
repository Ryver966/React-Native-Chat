const url = 'http://localhost:4000/api/';

export function createUser(user) {
  return fetch(`${ url }users`, {
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
  .then((response) => response.json)
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

export function deleteFriend(friendshipId) {
  return fetch(`${ url }friendships/${ friendShipId }`, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: null
  })
  .then((response) => response.json)
}