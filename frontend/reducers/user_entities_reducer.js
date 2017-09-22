import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions.js';

const userEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  const user = action.user.user

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[user.id] = user
      return newState
    default:
      return state;
  }
};

export default userEntitiesReducer;
