import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions.js';

const userEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  const users = action.users

  switch (action.type) {

    default:
      return state;
  }
};

export default userEntitiesReducer;
