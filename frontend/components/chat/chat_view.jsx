import React from 'react'

import ChatSideNav from './sidenav/chat_sidenav'
import ChannelRedirectContainer from
  './channel_redirects/channel_redirect_container'
import ChatgroupModalContainer from './chatgroup_forms/chatgroup_modal_container'

class ChatView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.resetDefaultTeamId(parseInt(this.props.match.params.teamId))
  }

  componentWillReceiveProps(nextProps) {
    const oldTeamId = parseInt(this.props.match.params.teamId)
    const newTeamId = parseInt(nextProps.match.params.teamId)
    if (oldTeamId !== newTeamId) {
      this.resetDefaultTeamId(newTeamId)
    }
  }

  resetDefaultTeamId(newTeamId) {
    const { teamIds, currentUser } = this.props

    if (teamIds.includes(newTeamId)) {

      this.props.editUser({
        default_team_id: newTeamId,
        id: currentUser.id })

    }
  }

  render() {
    const { match } = this.props

    return (
      <div className='chat_view'>
        <ChatSideNav />
        <ChatgroupModalContainer type='newTeam' />
      </div>
    )
  }
}

export default ChatView;
