import { connect } from 'react-redux'

import ChatView from './chat_view'
import { editUser } from '../../actions/user_actions'
import { getEntityIdsByMembership, getMembershipByEntityId } from '../../selectors/chat_selectors'

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    teamIds: getEntityIdsByMembership({
      type: 'team', 
      memberships: state.entities.teamMemberships
    }),
    getTeamMembership: (teamId) => getMembershipByEntityId({
      type: 'team',
      id: teamId,
      state
    })
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    editUser: user => dispatch(
      editUser(Object.assign(user))
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView);
