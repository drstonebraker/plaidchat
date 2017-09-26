import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ChatSidenavChannelIndex from './chat_sidenav_channel_index.jsx'
import { getSubscribedChannelsByTeamId } from '../../../selectors/chat_selectors'
import { openChatGroupModal } from '../../../actions/ui_actions'


const mapStateToProps = (state, ownProps) => {

  return {
    channelIndex: getSubscribedChannelsByTeamId(
      ownProps.match.params.teamId,
      state
    ),

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    openChatGroupModal: formType => dispatch(openChatGroupModal(formType)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatSidenavChannelIndex));
