import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MagicLinkModal from './magic_link_modal'
import { closeMagicLinkModal } from '../../../actions/ui_actions'

const mapStateToProps = (state, ownProps) => {
  const { channelId } = ownProps.match.params

  return {
    isOpen: state.ui.isMagicLinkModalOpen,
    inviteToken: state.ui.currentInviteToken,
    channelName: state.entities.channels[channelId].name
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onRequestClose: () => dispatch(closeMagicLinkModal()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MagicLinkModal));
