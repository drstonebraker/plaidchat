import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MessagesIndex from './messages_index'
import { getMessagesByChannelId } from '../../../selectors/message_selectors'
import { openMagicLinkModal, createInvite } from '../../../actions/ui_actions'

const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId
  return {
    channelId,
    messages: getMessagesByChannelId(channelId, state),
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
)(MessagesIndex));
