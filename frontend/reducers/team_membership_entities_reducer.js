import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions.js';

const teamMembershipEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return arrayToObj(action.user.team_memberships);
    default:
      return state;
  }
};

export default teamMembershipEntitiesReducer;