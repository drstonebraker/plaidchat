import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import SidenavHeaderModal from './sidenav_header_modal.jsx'
import { closeSidenavHeaderModal, openChatGroupModal } from
  '../../../actions/ui_actions'
import { logout } from '../../../actions/session_actions'
import { getTeamName, getTeamsByMembership } from
  '../../../selectors/chat_selectors'

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    isOpen: state.ui.isSideNavHeaderModalOpen,
    teamName: getTeamName(ownProps.match.params.teamId, state),
    teams: getTeamsByMembership(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onRequestClose: () => dispatch(closeSidenavHeaderModal()),
    openChatGroupModal: formType => dispatch(openChatGroupModal(formType)),
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SidenavHeaderModal));
