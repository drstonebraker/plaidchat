import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ChannelRedirect from './channel_redirect'
import { getMembershipByEntityId } from '../../../selectors/chat_selectors'

const mapStateToProps = (state, ownProps) => {
  const { currentUser } = state.session
  let { teamId, channelId } = ownProps.match.params
  teamId = parseInt(teamId)
  channelId = parseInt(channelId)

  const teamMembership = getMembershipByEntityId(
    'team',
    teamId,
    state
  )

  // const channelMembership = getMembershipByEntityId(
  //   'channel',
  //   channelId,
  //   state
  // )

  const channel = state.entities.channels[channelId]

  const defaultTeamId = state.entities.teamMemberships[
    currentUser.defaultTeamMembershipId
  ].teamId

  const defaultChannelId = teamMembership ? teamMembership.defaultChannelId : null

  const doesChannelBelongToTeam = channel ? channel.teamId === teamId : false

  debugger

  return {
    currentUser,
    teamMembership,
    defaultTeamId,
    // channelMembership,
    channel,
    teamId,
    channelId,
    defaultChannelId,
    doesChannelBelongToTeam,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelRedirect));
