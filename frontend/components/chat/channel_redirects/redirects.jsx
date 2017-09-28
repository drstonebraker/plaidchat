import React from 'react'
import { Redirect } from 'react-router-dom'

export const RedirectToTeam = ({ defaultTeamId }) => (
  <Redirect
    to={`/messages/${defaultTeamId}`}
  />
)

export const RedirectToDefaultChannel = ({teamId, defaultChannelId}) => (
  <Redirect
    to={`/messages/${teamId}/${defaultChannelId}`}
  />
)

export const RedirectToChannel = ({teamId, channelId}) => (
  <Redirect
    to={`/messages/${teamId}/${channelId}`}
  />
)
