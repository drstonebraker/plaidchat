import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import {
  RECEIVE_CHANNEL
} from '../actions/team_actions'

const teamEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  const team = action.team

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return arrayToObj(action.teams);
    case RECEIVE_NEW_TEAM:
      newState[team.id] = team
      return newState
    default:
      return state;
  }
};

export default teamEntitiesReducer;
