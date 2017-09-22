import React from 'react'

import ChatSideNav from './chat_sidenav'

class ChatView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className='chat_view'>
        <ChatSideNav />
      </div>
    )
  }
}

export default ChatView;
