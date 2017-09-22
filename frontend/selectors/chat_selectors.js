export const getTeamName = (teamId, state) => {
  return teamId && state.entities.teams[teamId].name
}

export const getTeamMembership = (teamId, state) => {
  const teamMemberships = state.entities.teamMemberships
  const currentUser = state.session.currentUser

  for (var id in teamMemberships) {
    if (teamMemberships.hasOwnProperty(id)) {
      const teamMembership = teamMemberships[id]
      if (
        teamId === teamMembership.teamId &&
        currentUser.id === teamMembership.userId
      ) {
        return teamMembership
      }
    }
  }
}
