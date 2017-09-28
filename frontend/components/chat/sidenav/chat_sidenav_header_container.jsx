import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ChatSidenavHeader from './chat_sidenav_header.jsx'
import { getEntityName } from '../../../selectors/chat_selectors'
import { openSidenavHeaderModal } from '../../../actions/ui_actions'

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    teamName: getEntityName(ownProps.match.params.teamId, 'team', state),
    isModalOpen: state.ui.isSideNavHeaderModalOpen,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    openHeaderModal: () => dispatch(openSidenavHeaderModal())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatSidenavHeader));
