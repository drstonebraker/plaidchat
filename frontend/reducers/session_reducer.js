import {
  RECEIVE_CURRENT_USER,
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
      return { currentUser: action.user ? action.user.user : null };
    case RECEIVE_NEW_TEAM:
      newState.currentUser.defaultTeamId = action.team.id
      return { currentUser: action.user ? action.user.user : null };
    default:
      return state;
  }
};

export default sessionReducer;
