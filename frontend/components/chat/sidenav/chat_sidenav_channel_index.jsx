import React from 'react'

import ChannelIndexSection from './channel_index_section.jsx'

class ChatSidenavChannelIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { channelIndex } = this.props



    return (
      <div
        className={`chat_sidenav_channel_index`}
      >
        <ChatSidenavChannelIndex

        />
      </div>
    )
  }
}

export default ChatSidenavChannelIndex
