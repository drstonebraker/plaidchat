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

// export const getMembershipByEntity = (options) => {
//   const { type, entityId, state } = options
//
//   if (!entityId) {
//     return null
//   }
//
//   const memberships = state.entities[`${type}Memberships`]
//   const currentUser = state.session.currentUser
//
//   for (let id in memberships) {
//     if (memberships.hasOwnProperty(id)) {
//       const membership = memberships[id]
//       if (
//         entityId === membership[`${type}Id`] &&
//         currentUser.id === membership.userId
//       ) {
//         return membership
//       }
//     }
//   }
//
//   return null
// }

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

export const getTeamIds = (teamMemberships) => {
  return Object.values(teamMemberships).map(membership => (
    membership.teamId
  ))
}

export const getTeamsByMembership = (state) => {
  const memberships = Object.values(state.entities.teamMemberships)
  const memberTeamIds = getTeamIds(memberships)
  const teams = Object.values(state.entities.teams)

  return teams.filter(team => (
    memberTeamIds.includes(team.id)
  ))
}
