import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ChannelRedirect from './channel_redirect'
import { getMembershipByEntityId } from '../../../selectors/chat_selectors'

const mapStateToProps = (state, ownProps) => {
  const { currentUser } = state.session

  return {
    currentUser,
    teamMembership: getMembershipByEntityId({
      type: 'team',
      id: ownProps.match.params.teamId,
      state
    }),
    defaultTeamId: state.entities.teamMemberships[
      currentUser.defaultTeamMembershipId
    ].teamId
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
