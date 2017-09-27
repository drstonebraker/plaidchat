import React from 'react'

import ChannelIndexSection from './channel_index_section.jsx'
import channelIndexSectionLists from './channel_index_section_list.jsx'

class ChatSidenavChannelIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { channels, openChatGroupModal } = this.props
    const {
      groupChannelList, directMessageChannelList
    } = channelIndexSectionLists(channels)

    return (
      <div
        className={`chat_sidenav_channel_index`}
      >
        <ChannelIndexSection
          headerContent='Channels'
          openChatGroupModal={openChatGroupModal}
        >
          { groupChannelList }
        </ChannelIndexSection>

        {/*
          <ChannelIndexSection headerContent='Direct Messages'>
            { directMessageChannelList }
          </ChannelIndexSection>
        */}

      </div>
    )
  }
}

export default ChatSidenavChannelIndex
