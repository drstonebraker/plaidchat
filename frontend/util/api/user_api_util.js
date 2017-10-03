export const patchUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: JSON.stringify({ user }),
    contentType: 'application/json'
  })
)

export const getUsersSearch = (query) => (
  $.ajax({
    method: 'GET',
    url: `api/users/search?query=${query}`,
    contentType: 'application/json'
  })
)
