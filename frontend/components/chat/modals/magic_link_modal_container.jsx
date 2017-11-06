import { connect } from 'react-redux'

import MagicLinkModal from './magic_link_modal'
import { closeMagicLinkModal } from '../../../actions/ui_actions'

const mapStateToProps = (state, ownProps) => {

  return {
    isOpen: state.ui.isMagicLinkModalOpen,
    inviteLink: state.ui.currentInviteLink,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onRequestClose: () => dispatch(closeMagicLinkModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MagicLinkModal);
