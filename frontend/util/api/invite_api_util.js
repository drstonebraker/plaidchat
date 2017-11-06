export const postInvite = (invite) => (
  $.ajax({
    method: 'POST',
    url: `api/invites`,
    data: JSON.stringify({ invite }),
    contentType: 'application/json'
  })
)
