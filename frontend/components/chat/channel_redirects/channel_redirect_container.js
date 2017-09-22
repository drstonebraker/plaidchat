import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ChannelRedirect from './channel_redirect'
import { getTeamMembership } from '../../selectors/chat_selectors'

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    teamMembership: getTeamMembership(
      ownProps.match.params.teamId,
      state),
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
