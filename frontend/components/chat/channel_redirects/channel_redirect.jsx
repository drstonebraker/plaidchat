import React from 'react'
import { Redirect } from 'react-router-dom'

const ChannelRedirect = (
  { match, currentUser, teamMembership }
) => {
  const teamId = match.params.teamId
  if (!teamMembership) {
    return (
      <Redirect
        to={
          `/messages/${currentUser.defaultTeamId}`
        }
      />
    )
  }
  // TODO: when after implementing channels
  // else if (teamId) {
  //   return (
  //     <Redirect
  //       to={
  //         `/messages/${teamId}/${teamMembership.defaultChannelId}`
  //       }
  //     />
  //   )
  // }
  else {
    return null
  }
}

export default ChannelRedirect
