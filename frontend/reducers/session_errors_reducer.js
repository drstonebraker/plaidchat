import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_ERRORS,
} from '../actions/session_actions.js';

const defaultState = {
  username: [],
  password: [],
  general: []
}

const sessionErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state, defaultState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {};
    case CLEAR_ERRORS:
      return {};
    case RECEIVE_SESSION_ERRORS:
      for (let i = 0; i < action.errors.length; i++) {
        let error = action.errors[i]
        newState.username = error.username || []
        newState.password = error.password || []
        newState.general = error.general || []
      }
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
