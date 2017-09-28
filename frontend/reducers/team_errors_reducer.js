import {
  RECEIVE_TEAM_ERRORS,
  CLEAR_CHATGROUP_ERRORS,
  RECEIVE_NEW_TEAM,
} from '../actions/team_actions'

const defaultState = {
  name: []
}

const teamsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state, defaultState)

  switch (action.type) {
    case RECEIVE_NEW_TEAM:
      return defaultState;
    case CLEAR_CHATGROUP_ERRORS:
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
