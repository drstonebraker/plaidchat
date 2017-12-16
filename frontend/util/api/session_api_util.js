// jquery

// export const postUser = (user) => (
//   $.ajax({
//     method: 'POST',
//     url: `api/users`,
//     data: JSON.stringify({ user }),
//     contentType: 'application/json'
//   })
// )

// export const postSession = (user) => (
//   $.ajax({
//     method: 'POST',
//     url: `api/session`,
//     data: JSON.stringify({ user }),
//     contentType: 'application/json'
//   })
// )

export const deleteSession = () => (
  $.ajax({
    method: 'DELETE',
    url: `api/session`
  })
)

// fetch

const checkStatus = res => (
  res.ok ? res : res.json().then((err) => { throw err; })
);

const getJSON = res => res.json();

export const postUser = user => (
  fetch(`api/users`, {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include'
  }).then(checkStatus)
    .then(getJSON)
);

export const postSession = user => (
  fetch(`api/session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user }),
    credentials: 'include'
  }).then(checkStatus)
    .then(getJSON)
);
