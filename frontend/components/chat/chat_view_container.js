import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ChatView from './chat_view'
import { editUser } from '../../actions/user_actions'
import { receiveMessage } from '../../actions/message_actions'
import {
  getEntityIdsByMembership,
  getMembershipByEntityId ,
  getSubscribedChannelsByTeamId,
} from '../../selectors/chat_selectors'

const mapStateToProps = (state, ownProps) => {

  const { teamId } = ownProps.match.params

  return {
    currentUser: state.session.currentUser,
    teamIds: getEntityIdsByMembership('team', state),
    getTeamMembership: (id) => getMembershipByEntityId(
      'team',
      id,
      state
    ),
    teamChannels: getSubscribedChannelsByTeamId(teamId, state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    editUser: user => dispatch(
      editUser(Object.assign(user))
    ),
    receiveMessage: data => dispatch(receiveMessage(data.message)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView));
