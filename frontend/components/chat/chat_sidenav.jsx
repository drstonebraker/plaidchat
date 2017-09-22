import React from 'react'

import ChatSidenavHeaderContainer from './chat_sidenav_header_container'

class ChatSideNav extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className='chat_sidenav'>
        <ChatSidenavHeaderContainer />
      </div>
    )
  }
}

export default ChatSideNav
