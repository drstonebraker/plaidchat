import React from 'react'
import { Redirect } from 'react-router-dom'

export const RedirectToTeam = ({ defaultTeamId }) => (
  <Redirect
    to={`/messages/${defaultTeamId}`}
  />
)

export const RedirectToChannel = ({teamId, defaultChannelId}) => (
  <Redirect
    to={`/messages/${teamId}/${defaultChannelId}`}
  />
)
