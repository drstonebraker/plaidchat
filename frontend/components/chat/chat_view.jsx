import React from 'react'

import ChatSideNav from './sidenav/chat_sidenav'
import MessagesView from './messages/messages_view'
import ChannelRedirectContainer from
  './channel_redirects/channel_redirect_container'
import ChatgroupModalContainer from
  './chatgroup_forms/chatgroup_modal_container'
import InviteConfirmModalContainer from
  './chatgroup_forms/invite_confirm_modal_container'

class ChatView extends React.Component {
  constructor(props) {
    super(props)

    this.subscribeToSocket = this.subscribeToSocket.bing(this)
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

  subscribeAllChannels () {
    // subscribe new teams channels.
    // call this from componentDidMount and willReceiveProps?
  }

  unsubscribeAllChannels () {
    const { teamChannels } = this.props

    //remove all subscribed channels, such as in...
    // https://github.com/RyleySill93/clack/blob/master/frontend/components/channel_list.jsx

    // setSocket (channelName) {
    //   const channels = values(this.props.channels)
    //     .concat(this.props.directMessages) || [];
    //   if (channels.length > 0) {
    //     window.App.cable.subscriptions.subscriptions
    //       .forEach(sub => this.removeSocket(sub));
    //     channels.forEach(channel => this.addSocket(`channel_${channel.id}`));
    //   }
    // }
  }

  subscribeToSocket (channelName) {
    // learned from https://gist.github.com/louisscruz/353429252f6a888262117e3d856ebfc2#file-message-rb
    window.App.cable.subscriptions.create({
      channel: 'MessagesChannel',
      channel_name: channelName
    }, {
      connected: () => {},
      disconnected: () => {},
      received: (data) => {
        this.props.receiveMessage(data.message);
      }
    });
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
        <MessagesView />
        <ChatgroupModalContainer />
        <InviteConfirmModalContainer />
      </div>
    )
  }
}

export default ChatView;
