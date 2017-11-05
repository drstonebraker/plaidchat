import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ChatgroupForm from './chatgroup_form.jsx'
import * as ErrorsSelector from '../../../selectors/errors_selectors'
import { getUserSearchOptions } from '../../../selectors/chatgroup_selectors'
import { createTeam, inviteTeam, clearChatgroupErrors } from
  '../../../actions/team_actions';
import { createChannel, inviteChannel } from
  '../../../actions/channel_actions';
import { searchUsers } from
  '../../../actions/user_actions';
import {
  closeChatGroupModal,
  loadingUsersSearch,
  openInviteConfirmModal,
  closeInviteConfirmModal,
  sendingUserInvites,
} from '../../../actions/ui_actions';
import { updateDefaultTeam } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const teamId = ownProps.match.params.teamId
  const channelId = ownProps.match.params.channelId
  const teamName = state.entities.teams[teamId].name
  const channelName = state.entities.channels[channelId].name

  let actionType;
  let entityType;
  let headingContent;
  let submitContent;
  let errors;
  let inviteType;

  switch (state.ui.chatgroupFormType) {
    case 'createTeam':
      actionType = 'create'
      entityType = 'team'
      headingContent = 'Create a new team'
      submitContent = 'Create Team'
      errors = state.errors.team;
      inviteType = 'users'
      break;
    case 'createChannel':
      actionType = 'create'
      entityType = 'channel'
      headingContent = 'Create a new channel'
      submitContent = 'Create Channel'
      errors = state.errors.channel;
      inviteType = 'team members'
      break;
    case 'inviteTeam':
      actionType = 'invite'
      entityType = 'team'
      headingContent = `Add users to ${teamName}`
      submitContent = 'Send Invites'
      errors = state.errors.team;
      inviteType = 'users'
      break;
    case 'inviteChannel':
      actionType = 'invite'
      entityType = 'channel'
      headingContent = `Add users to ${channelName}`
      submitContent = 'Send Invites'
      errors = state.errors.channel;
      inviteType = 'team members'
      break;
  }

  return {
    actionType,
    entityType,
    headingContent,
    submitContent,
    inviteType,
    teamId: ownProps.match.params.teamId,
    nameErrors: ErrorsSelector.getErrors(errors, 'name'),
    hasNameErrors: ErrorsSelector.hasErrors(errors, 'name'),
    isInvalidName: ErrorsSelector.isInvalid(errors, 'name'),
    isUserSearchLoading: state.ui.isUserSearchLoading,
    usersSearch: state.ui.usersSearch,
    isUserInvitesSent: state.ui.isUserInvitesSent
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { teamId } = ownProps.match.params

  return {
    closeChatGroupModal: () => dispatch(closeChatGroupModal()),
    clearChatgroupErrors: () => dispatch(clearChatgroupErrors()),
    createTeam: team => dispatch(createTeam(team)),
    createChannel: channel => dispatch(createChannel(channel)),
    inviteTeam: team => dispatch(inviteTeam(team)),
    inviteChannel: channel => dispatch(inviteChannel(channel)),
    loadingUsersSearch: () => dispatch(loadingUsersSearch()),
    searchUsers: query => dispatch(searchUsers(query)),
    openInviteConfirmModal: (entityType) => dispatch(
      openInviteConfirmModal(entityType)
    ),
    closeInviteConfirmModal: () => dispatch(closeInviteConfirmModal()),
    sendingUserInvites: () => dispatch(sendingUserInvites())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatgroupForm));
