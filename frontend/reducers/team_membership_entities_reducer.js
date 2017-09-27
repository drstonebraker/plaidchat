import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions.js';
import {
  RECEIVE_NEW_TEAM,
} from '../actions/team_actions';
import {
  RECEIVE_NEW_CHANNEL,
} from '../actions/channel_actions';
import {
  RECEIVE_TEAM_MEMBERSHIP,
} from '../actions/team_membership_actions';

const teamMembershipEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  const { teamMembership, teamMemberships } = action

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return arrayToObj(teamMemberships);
    case RECEIVE_NEW_TEAM:
      newState[teamMembership.id] = teamMembership
      return newState;
    case RECEIVE_NEW_CHANNEL:
      newState[teamMembership.id] = teamMembership
      return newState;
    case RECEIVE_TEAM_MEMBERSHIP:
      newState[teamMembership.id] = teamMembership
      return newState
    default:
      return state;
  }
};

export default teamMembershipEntitiesReducer;
