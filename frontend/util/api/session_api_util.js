export const postUser = (user) => (
  $.ajax({
    method: 'POST',
    url: `api/users`,
    data: JSON.stringify({ user }),
    contentType: 'application/json'
  })
)

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
