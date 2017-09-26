import { connect } from 'react-redux'

import ChatView from './chat_view'
import { editUser } from '../../actions/user_actions'
import { getTeamIds, getTeamMembership } from '../../selectors/chat_selectors'

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    teamIds: getTeamIds(state.entities.teamMemberships),
    getTeamMembership: (teamId) => getTeamMembership(teamId, state)
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
