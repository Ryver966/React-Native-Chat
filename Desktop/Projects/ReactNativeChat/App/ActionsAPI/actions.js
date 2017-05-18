const url = 'http://localhost:4000/api/users';

export function apiSignUp(_email, _name, _password) {
  return fetch(url, {
    method: "POST",
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: _email,
      password: _password,
      name: _name
    })
  })
  .then((response) => response.json)
}