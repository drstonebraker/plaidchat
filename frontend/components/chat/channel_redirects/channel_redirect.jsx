import React from 'react'

import { RedirectToTeam, RedirectToDefaultChannel, RedirectToChannel } from './redirects.jsx'

const ChannelRedirect = (props) => {
  const {
    match, currentUser, teamMembership, superfluous,
    channel, defaultChannelId, teamId, doesChannelBelongToTeam, channelId
  } = props

  if (!teamMembership || (channelId && !doesChannelBelongToTeam))
    { return <RedirectToTeam {...props} /> }
  else if (teamId && !channelId)
    { return <RedirectToDefaultChannel {...props} /> }
  else if (teamId && channelId && superfluous)
    { return <RedirectToChannel {...props} /> }
  else { return null }
}

export default ChannelRedirect
