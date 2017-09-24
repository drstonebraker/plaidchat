export const postTeam = (team) => (
  $.ajax({
    method: 'POST',
    url: `api/teams`,
    data: { team }
  })
)
