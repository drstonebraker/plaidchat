import { arrayToObj } from '../util/shapers'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import {
  RECEIVE_NEW_TEAM
} from '../actions/team_actions'

const teamEntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  const { team, teams } = action

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return arrayToObj(teams);
    case RECEIVE_NEW_TEAM:
      newState[team.id] = team
      return newState
    default:
      return state;
  }
};

export default teamEntitiesReducer;
