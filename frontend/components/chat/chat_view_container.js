import { connect } from 'react-redux'

import ChatView from './chat_view'
import { editUser } from '../../actions/user_actions'
import { receiveMessage } from '../../actions/message_actions'
import { getEntityIdsByMembership, getMembershipByEntityId } from
  '../../selectors/chat_selectors'

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    teamIds: getEntityIdsByMembership('team', state),
    getTeamMembership: (teamId) => getMembershipByEntityId(
      'team',
      teamId,
      state
    )
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView);
