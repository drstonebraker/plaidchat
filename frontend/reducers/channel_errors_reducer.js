import {
  RECEIVE_CHANNEL_ERRORS,
  RECEIVE_NEW_CHANNEL,
} from '../actions/channel_actions'
import {
    CLEAR_CHATGROUP_ERRORS,
} from '../actions/team_actions'

const defaultState = {
  name: []
}

const channelsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state, defaultState)

  switch (action.type) {
    case RECEIVE_NEW_CHANNEL:
      return defaultState;
    case CLEAR_CHATGROUP_ERRORS:
      return defaultState;
    case RECEIVE_CHANNEL_ERRORS:
      for (let i = 0; i < action.errors.length; i++) {
        let error = action.errors[i]
        newState.name = error.name || []
      }
      return newState;
    default:
      return state;
  }
};

export default channelsReducer;
