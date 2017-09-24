export const postTeam = (team, currentUser) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${currentUser.id}/teams`,
    data: { team }
  })
)
