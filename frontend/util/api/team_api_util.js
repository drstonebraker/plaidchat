export const postTeam = (team) => (
  $.ajax({
    method: 'POST',
    url: `api/teams`,
    data: JSON.stringify({ team }),
    contentType: 'application/json'
  })
)

export const inviteTeam = (team) => (
  $.ajax({
    method: 'PATCH',
    url: `api/teams/invite/${team.id}`,
    data: JSON.stringify({ team }),
    contentType: 'application/json'
  })
)
