import { connect } from 'react-redux'

import InviteConfirmModal from './invite_confirm_modal.jsx'

const mapStateToProps = (state, ownProps) => {

  let chatgroupType;

  switch (state.ui.isInviteConfirmModalOpen) {
    case 'createTeam':
      chatgroupType = 'team'
      break;
    case 'createChannel':
      chatgroupType = 'channel'
      break;
  }

  return {
    chatgroupType,
    isOpen: Boolean(state.ui.isInviteConfirmModalOpen),
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
