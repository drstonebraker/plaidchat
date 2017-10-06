import React from 'react'
import isEqual from 'lodash.isequal'

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

    this.subscribeToSocket = this.subscribeToSocket.bind(this)
  }

  componentDidMount() {
    this.resetDefaultTeamMembershipId(this.props.match.params.teamId)
    this.subscribeChannels(this.props.teamChannels)
  }

  componentWillReceiveProps(nextProps) {
    this.checkTeamChange(nextProps)
    this.checkChannelsChange(nextProps)
  }

  componentWillUnmount () {
    this.unsubscribeChannels(this.props.teamChannels)
  }

  checkTeamChange (nextProps) {
    const oldTeamId = Number(this.props.match.params.teamId)
    const newTeamId = Number(nextProps.match.params.teamId)
    if (oldTeamId !== newTeamId) {
      this.resetDefaultTeamMembershipId(newTeamId)
    }
  }

  checkChannelsChange (nextProps) {
    const oldTeamChannels = this.props.teamChannels
    const newTeamChannels = nextProps.teamChannels
    if (!isEqual(oldTeamChannels.sort(), newTeamChannels.sort())) {
      this.unsubscribeChannels(oldTeamChannels)
      this.subscribeChannels(newTeamChannels)
    }
  }

  subscribeChannels (teamChannels) {

    for (let i = 0; i < teamChannels.length; i++) {
      const channel = teamChannels[i]
      this.subscribeToSocket(channel)
    }
  }

  unsubscribeChannels (teamChannels) {
    const { subscriptions } = window.App.cable.subscriptions
    window.App.webSockets = {}

    for (let i = 0; i < subscriptions.length; i++) {
      const subscription = subscriptions[i]
      this.unsubscribeSocket(subscription)
    }
  }

  subscribeToSocket (channel) {
    const channelName = `channel_${channel.id}`
    // learned from https://gist.github.com/louisscruz/353429252f6a888262117e3d856ebfc2#file-message-rb
    window.App.webSockets = window.App.webSockets || {}
    window.App.webSockets[channel.id] = window.App.cable.subscriptions.create({
      channel: 'MessagesChannel',
      channel_name: channelName
    }, {
      connected: () => {},
      disconnected: () => {},
      received: (message) => {
        this.props.receiveMessage(message);
      },
    });
  }

  unsubscribeSocket (channel) {
    window.App.cable.subscriptions.remove(channel)
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
