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
    const { teamIds, currentUser, getTeamMembership } = this.props

    if (teamIds.includes(parseInt(newTeamId))) {

      this.props.editUser({
        user: {
          default_team_membership_id: getTeamMembership(newTeamId).id,
          id: currentUser.id
        },

      })

    }
  }

  render() {
    const { match } = this.props

    return (
      <div className='chat_view'>
        <ChatSideNav />
        <ChatgroupModalContainer />
      </div>
    )
  }
}

export default ChatView;
