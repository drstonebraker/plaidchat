import {
  RECEIVE_TEAM_ERRORS,
  CLEAR_TEAM_ERRORS,
  RECEIVE_TEAM,
} from '../actions/team_actions'

const defaultState = {
  name: []
}

const teamsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state, defaultState)

  switch (action.type) {
    case RECEIVE_TEAM:
      return defaultState;
    case CLEAR_TEAM_ERRORS:
      return defaultState;
    case RECEIVE_TEAM_ERRORS:
      for (let i = 0; i < action.errors.length; i++) {
        let error = action.errors[i]
        newState.name = error.name || []
      }
      return newState;
    default:
      return state;
  }
};

export default teamsReducer;
