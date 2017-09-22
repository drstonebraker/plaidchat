import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions.js';

const teamEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return arrayToObj(action.user.teams);
    default:
      return state;
  }
};

export default teamEntitiesReducer;
