import React from 'react'

import ChatSideNav from './sidenav/chat_sidenav'
import ChannelRedirectContainer from
  './channel_redirects/channel_redirect_container'

class ChatView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { teamId } = this.props.match.params
    this.props.editUser({ defaultTeamId: teamId })
  }

  render() {
    const { match } = this.props

    return (
      <div className='chat_view'>
        <ChatSideNav />
      </div>
    )
  }
}

export default ChatView;
