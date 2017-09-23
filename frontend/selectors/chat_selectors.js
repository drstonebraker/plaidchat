export const getTeamName = (teamId, state) => {
  const currentTeam = state.entities.teams[teamId]
  if (
    teamId === undefined ||
    currentTeam === undefined
  ) {
    return null
  }
  return currentTeam.name
}

export const getTeamMembership = (teamId, state) => {
  // debugger
  if (!teamId) {
    return null
  }
  const teamMemberships = state.entities.teamMemberships
  const currentUser = state.session.currentUser

  for (let id in teamMemberships) {
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

  return null
}

// export const getTeamMembershipIds = (teamMemberships) => {
//   return Object.values(teamMemberships).map(membership => (
//     membership.id
//   ))
// }
