import {
  RECEIVE_CURRENT_USER,
  UPDATE_DEFAULT_TEAM,
} from '../actions/session_actions';
import {
  RECEIVE_NEW_TEAM,
} from '../actions/team_actions';


const nullUser = {
  currentUser: null
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      return newState
    case RECEIVE_NEW_TEAM:
      newState.currentUser.defaultTeamMembershipId = action.teamMembership.id
      return newState
    default:
      return state;
  }
};

export default sessionReducer;
