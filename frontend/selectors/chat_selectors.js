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

export const getMembershipByEntityId = (type, entityId, state) => {
  entityId = parseInt(entityId)

  if (!entityId) {
    return null
  }

  const memberships = state.entities[`${type}Memberships`]
  const currentUser = state.session.currentUser

  for (let membershipId in memberships) {
    if (memberships.hasOwnProperty(membershipId)) {
      const membership = memberships[membershipId]
      if (
        entityId === membership[`${type}Id`] &&
        currentUser.id === membership.userId
      ) {
        return membership
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

export const getEntityIdsByMembership = (type, state) => {
  const memberships = state.entities[`${type}Memberships`]
  return Object.values(memberships).map(membership => (
    membership[`${type}Id`]
  ))
}

export const getEntitiesByMembership = (type, state) => {
  const memberIds = getEntityIdsByMembership('team', state)
  const entities = Object.values(state.entities[`${type}s`])

  return entities.filter(entity => (
    memberIds.includes(entity.id)
  ))
}

export const getSubscribedChannelsByTeamId = (teamId, state) => {
  const teamChannels = state.entities.channels.filter((channel) => (
    channel.teamId === teamId
  ))
  const subscribedChannelIds = getEntityIdsByMembership(
    state.entities.channelMemberships
  )
  const subscribedTeamChannels = teamChannels.filter((channel) => (
    subscribedChannelIds.includes(channel.id)
  ))
  return subscribedTeamChannels
}
