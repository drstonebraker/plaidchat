import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import {
  RECEIVE_NEW_CHANNEL
} from '../actions/channel_actions'

const channelEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  const { defaultTeamChannels, channel } = action
  debugger

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(newState, arrayToObj(defaultTeamChannels));
    case RECEIVE_NEW_CHANNEL:
      newState[channel.id] = channel
      return newState
    default:
      return state;
  }
};

export default channelEntitiesReducer;
