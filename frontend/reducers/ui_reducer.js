import {
  OPEN_SIDENAV_HEADER_MODAL,
  CLOSE_SIDENAV_HEADER_MODAL,
  OPEN_NEW_TEAM_VIEW_MODAL,
  CLOSE_NEW_TEAM_VIEW_MODAL,
} from '../actions/ui_actions.js';

const defaultState = {
  isSideNavHeaderModalOpen: false,
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)

  switch (action.type) {
    case OPEN_SIDENAV_HEADER_MODAL:
      newState.isSideNavHeaderModalOpen = true
      return newState;
    case CLOSE_SIDENAV_HEADER_MODAL:
      newState.isSideNavHeaderModalOpen = false
      return newState;
    case OPEN_NEW_TEAM_VIEW_MODAL:
      newState.isNewTeamViewModalOpen = true
      return newState;
    case CLOSE_NEW_TEAM_VIEW_MODAL:
      newState.isNewTeamViewModalOpen = false
      return newState;
    default:
      return state;
  }
};

export default uiReducer;