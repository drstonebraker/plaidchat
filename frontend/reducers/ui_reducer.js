import {
  OPEN_SIDENAV_HEADER_MODAL
} from '../actions/session_actions.js';

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
    default:
      return state;
  }
};

export default uiReducer;
