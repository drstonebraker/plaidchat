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
      return Object.assign(newState, { currentUser: action.user });
    case RECEIVE_NEW_TEAM:
      newState.currentUser.defaultTeamId = action.team.id
      return newState
    default:
      return state;
  }
};

export default sessionReducer;
