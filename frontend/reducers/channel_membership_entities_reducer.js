import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions.js';
import {
  RECEIVE_NEW_CHANNEL,
} from '../actions/channel_actions';
import {
  RECEIVE_CHANNEL_MEMBERSHIP,
} from '../actions/channel_membership_actions';

const channelMembershipEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  const channelMemberships = action.channelMemberships
  const channelMembership = action.channelMembership

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return arrayToObj(action.channelMemberships);
    case RECEIVE_NEW_CHANNEL:
      newState[channelMembership.id] = channelMembership
      return newState;
    case RECEIVE_CHANNEL_MEMBERSHIP:
      newState[channelMembership.id] = channelMembership
      return newState
    default:
      return state;
  }
};

export default channelMembershipEntitiesReducer;
