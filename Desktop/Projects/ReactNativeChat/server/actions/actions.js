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
}