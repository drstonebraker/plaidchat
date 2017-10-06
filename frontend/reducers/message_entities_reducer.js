import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions.js';
import {
  RECEIVE_MESSAGE,
} from '../actions/message_actions';

const messageEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  const { message, messages } = action

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return arrayToObj(messages);
    case RECEIVE_MESSAGE:
      newState[message.id] = message
      return newState
    default:
      return state;
  }
};

export default messageEntitiesReducer;
