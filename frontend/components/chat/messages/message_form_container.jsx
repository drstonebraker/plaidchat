import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MessageForm from './message_form'

const mapStateToProps = (state, ownProps) => {

  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm));
