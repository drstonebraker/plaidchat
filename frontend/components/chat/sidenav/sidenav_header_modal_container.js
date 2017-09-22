import { connect } from 'react-redux'

import SidenavHeaderModal from './sidenav_header_modal'
import { closeSidenavHeaderModal } from '../../../actions/ui_actions'

const mapStateToProps = (state, ownProps) => {

  return {
    isOpen: state.ui.isSideNavHeaderModalOpen,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onRequestClose: () => dispatch(closeSidenavHeaderModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidenavHeaderModal);
