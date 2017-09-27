import React from 'react'
import { NavLink } from 'react-router-dom'

import StatusIndicator from './status_indicator.jsx'

const partitionChannels = (channels) => {
  const groupChannels = []
  const directMessageChannels = []

  for (let i = 0; i < channels.length; i++) {
    const channel = channels[i]
    if (channel.isDirectMessage) {
      directMessageChannels.push(channel)
    } else {
      groupChannels.push(channel)
    }
  }

  return { groupChannels, directMessageChannels }
}

const createChannelList = (groupChannels, type) => {
  return groupChannels.map(channel => {
    return (
      <NavLink
        className={`channel_navlink channel_navlink--${type}`}
        activeClassName="channel_navlink--active"
        to={`/messages/${channel.teamId}/${channel.id}`}
      >
        {
          type === 'group' ? (
            <span className="left_icon">#</span>
          ) : (
            <StatusIndicator />
          )
        }
        { channel.name }
      </NavLink>
    )
  })
}

const channelIndexSectionLists = (channels) => {
  const {
    groupChannels, directMessageChannels
  } = partitionChannels(channels)

  const groupChannelList = createChannelList(groupChannels, 'group')
  const directMessageChannelList = createChannelList(
    directMessageChannels, 'direct_message'
  )

  return { groupChannelList, directMessageChannelList }
}

export default channelIndexSectionLists
