import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ChatSidenavHeader from './chat_sidenav_header'
import { getTeamName } from '../../selectors/chat_selectors'

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    teamName: getTeamName(ownProps.match.params.teamId, state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatSidenavHeader));
