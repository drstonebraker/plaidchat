import React from 'react'

import { RedirectToTeam, RedirectToChannel } from './redirects.jsx'

const ChannelRedirect = (props) => {
  const {
    match, currentUser, teamMembership, defaultTeamId,
    channel, defaultChannelId, teamId, doesChannelBelongToTeam, channelId
  } = props

  debugger
// || (channelId && !doesChannelBelongToTeam)
  if (!teamMembership || (channelId && !doesChannelBelongToTeam))
    { return <RedirectToTeam {...props} /> }
  else if (teamId && !channelId)
    { return <RedirectToChannel {...props} /> }
  // else if (teamId && channel.teamId === teamId) {
  //
  //   return <RedirectToTeam {...props} />
  //
  // }
  else {

    return null

  }
}

export default ChannelRedirect
