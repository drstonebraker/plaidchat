export const patchUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: JSON.stringify({ user }),
    contentType: 'application/json'
  })
)
