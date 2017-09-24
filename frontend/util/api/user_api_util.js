export const patchUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
  })
)
