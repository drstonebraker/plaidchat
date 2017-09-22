import React from 'react'
import { Redirect } from 'react-router-dom'

const ChannelRedirect = ({match, currentUser, teamMembership}) => (
  match.params.teamId ? (
    <Redirect
      to={
        `/messages/${match.params.teamId}/${teamMembership.defaultChannelId}`
      }
    />
  ) : (
    <Redirect
      to={
        `/messages/${currentUser.defaultTeamId}`
      }
    />
  )
)

export default ChannelRedirect
