export const getEntityName = (id, type, state) => {
  const currentEntity = state.entities[`${type}s`][id]
  if (
    id === undefined ||
    currentEntity === undefined
  ) {
    return null
  }
  return currentEntity.name
}

export const getMembershipByEntityId = (type, entityId, state) => {
  entityId = Number(entityId)

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
  teamId = Number(teamId)
  const channels = Object.values(state.entities.channels)
  const teamChannels = channels.filter((channel) => (
    channel.teamId === teamId
  ))
  const subscribedChannelIds = getEntityIdsByMembership(
    'channel',
    state
  )
  const subscribedTeamChannels = teamChannels.filter((channel) => (
    subscribedChannelIds.includes(channel.id)
  ))
  return subscribedTeamChannels
}
