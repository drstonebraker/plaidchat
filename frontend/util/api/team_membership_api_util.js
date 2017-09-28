export const patchTeamMembership = (teamMembership) => (
  $.ajax({
    method: 'PATCH',
    url: `api/team_memberships/${teamMembership.id}`,
    data: JSON.stringify({ teamMembership }),
    contentType: 'application/json'
  })
)
