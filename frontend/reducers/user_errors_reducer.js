import {
  RECEIVE_USER_ERRORS,
  CLEAR_USER_ERRORS,
} from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const defaultState = {

}

const userErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state, defaultState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {};
    case CLEAR_USER_ERRORS:
      return {};
    case RECEIVE_USER_ERRORS:
      for (let i = 0; i < action.errors.length; i++) {
        let error = action.errors[i]
        newState.username = error.username || []
        newState.password = error.password || []
        newState.defaultTeamId = error.defaultTeamId || []
        newState.general = error.general || []
      }
      return newState;
    default:
      return state;
  }
};

export default userErrorsReducer;
