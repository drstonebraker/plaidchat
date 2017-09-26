import React from 'react'

import ChatSidenavHeaderContainer from './chat_sidenav_header_container'
import ChatSidenavChannelIndexContainer from
  './chat_sidenav_channel_index_container'

class ChatSideNav extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {

    return (
      <nav className='chat_sidenav'>
        <ChatSidenavHeaderContainer />

      </nav>
    )
  }
}
// <ChatSidenavChannelIndexContainer />

export default ChatSideNav
