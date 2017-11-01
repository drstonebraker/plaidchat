import { connect } from 'react-redux'

import InviteConfirmModal from './invite_confirm_modal.jsx'

const mapStateToProps = (state, ownProps) => {

  return {
    chatgroupType: state.ui.inviteConfirmModalType,
    isOpen: state.ui.isInviteConfirmModalOpen,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteConfirmModal);
