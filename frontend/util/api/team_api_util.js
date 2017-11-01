export const postTeam = (team) => (
  $.ajax({
    method: 'POST',
    url: `api/teams`,
    data: JSON.stringify({ team }),
    contentType: 'application/json'
  })
)

export const patchTeam = (team) => (
  $.ajax({
    method: 'PATCH',
    url: `api/teams/${team.id}`,
    data: JSON.stringify({ team }),
    contentType: 'application/json'
  })
)
