import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions.js';
import {
  RECEIVE_TEAM,
} from '../actions/team_actions';
import {
  RECEIVE_TEAM_MEMBERSHIP,
} from '../actions/team_membership_actions';

const teamMembershipEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  const teamMemberships = action.teamMemberships
  const teamMembership = action.teamMembership

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return arrayToObj(action.teamMemberships);
    case RECEIVE_TEAM:
      return Object.assign(newState, arrayToObj(teamMemberships))
    case RECEIVE_TEAM_MEMBERSHIP:
      newState[teamMembership.id] = teamMembership
      return newState
    default:
      return state;
  }
};

export default teamMembershipEntitiesReducer;
