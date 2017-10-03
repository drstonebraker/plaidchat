import React from 'react'

import ChatSideNav from './sidenav/chat_sidenav.jsx'
import ChannelRedirectContainer from
  './channel_redirects/channel_redirect_container'
import ChatgroupModalContainer from
  './chatgroup_forms/chatgroup_modal_container'
import InviteConfirmModalContainer from
  './chatgroup_forms/invite_confirm_modal_container'

class ChatView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.resetDefaultTeamMembershipId(this.props.match.params.teamId)
  }

  componentWillReceiveProps(nextProps) {
    const oldTeamId = Number(this.props.match.params.teamId)
    const newTeamId = Number(nextProps.match.params.teamId)
    if (oldTeamId !== newTeamId) {
      this.resetDefaultTeamMembershipId(newTeamId)
    }
  }

  resetDefaultTeamMembershipId(newTeamId) {
    const { teamIds, currentUser, getTeamMembership } = this.props

    if (teamIds.includes(Number(newTeamId))) {

      this.props.editUser({
        defaultTeamMembershipId: getTeamMembership(newTeamId).id,
        id: currentUser.id
      })

    }
  }

  render() {
    const { match } = this.props

    return (
      <div className='chat_view'>
        <ChatSideNav />
        <ChatgroupModalContainer />
        <InviteConfirmModalContainer />
      </div>
    )
  }
}

export default ChatView;
