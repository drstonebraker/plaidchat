import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions.js';
import {
  RECEIVE_NEW_TEAM,
} from '../actions/team_actions';

const teamMembershipEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  const teamMembership = action.teamMembership

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.user) {
        return arrayToObj(action.user.teamMemberships);
      } else {
        return {}
      }
    case RECEIVE_NEW_TEAM:
      newState[teamMembership.id] = teamMembership
      return newState
    default:
      return state;
  }
};

export default teamMembershipEntitiesReducer;
