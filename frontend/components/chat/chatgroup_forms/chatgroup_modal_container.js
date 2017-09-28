import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ChatgroupModal from './chatgroup_modal.jsx'
import { openChatGroupModal, closeChatGroupModal } from
  '../../../actions/ui_actions'

const mapStateToProps = (state, ownProps) => {

  return {
    isOpen: state.ui.isChatGroupModalOpen,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onRequestClose: () => dispatch(closeChatGroupModal()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatgroupModal));
