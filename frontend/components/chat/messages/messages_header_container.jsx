import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MessagesHeader from './messages_header'
import { openMagicLinkModal, createInvite } from '../../../actions/ui_actions'

const mapStateToProps = (state, ownProps) => {

  return {
    isDemo: state.session.currentUser.isDemo,
    channel: state.entities.channels[ownProps.match.params.channelId],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { channelId } = ownProps.match.params

  return {
    openMagicLinkModal: () => dispatch(openMagicLinkModal()),
    createInvite: () => dispatch(createInvite({channelId})),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesHeader));
