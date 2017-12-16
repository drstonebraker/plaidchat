// jquery

// export const postUser = (user) => (
//   $.ajax({
//     method: 'POST',
//     url: `api/users`,
//     data: JSON.stringify({ user }),
//     contentType: 'application/json'
//   })
// )

export const postSession = (user) => (
  $.ajax({
    method: 'POST',
    url: `api/session`,
    data: JSON.stringify({ user }),
    contentType: 'application/json'
  })
)

export const deleteSession = () => (
  $.ajax({
    method: 'DELETE',
    url: `api/session`
  })
)

// fetch

const checkStatus = (response) => {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return response.json().then(err => Promise.reject(err));
  }
};

const getJSON = response => (
  response.json()
);

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
