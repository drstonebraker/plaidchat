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

    default:
      return state;
  }
};

export default userErrorsReducer;
