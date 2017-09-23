import { connect } from 'react-redux'

import ChatView from './chat_view'
import { editUser } from '../../actions/user_actions'
import { getTeamIds } from '../../selectors/chat_selectors'

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    teamIds: getTeamIds(state.entities.teamMemberships)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    editUser: user => dispatch(
      editUser(Object.assign(user))
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView);
