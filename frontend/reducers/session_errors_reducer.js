import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions.js';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {};
    case RECEIVE_SESSION_ERRORS:
      for (let i = 0; i < action.errors.length; i++) {
        let error = action.errors[i]
        newState.username = error.username
        newState.password = error.password
        newState.errors = error.errors
      }
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
