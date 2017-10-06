import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MessageForm from './message_form'
import { createMessage } from '../../../actions/message_actions'

const mapStateToProps = (state, ownProps) => {

  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    createMessage: message => dispatch(createMessage(message))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm));
