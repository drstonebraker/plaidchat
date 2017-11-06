import {
  OPEN_SIDENAV_HEADER_MODAL,
  CLOSE_SIDENAV_HEADER_MODAL,
  OPEN_CHATGROUP_MODAL,
  CLOSE_CHATGROUP_MODAL,
  OPEN_INVITE_CONFIRM_MODAL,
  CLOSE_INVITE_CONFIRM_MODAL,
  SET_CHATGROUP_FORM_TYPE,
  LOADING_USERS_SEARCH,
  SENDING_USER_INVITES,
  OPEN_MAGIC_LINK_MODAL,
  CLOSE_MAGIC_LINK_MODAL,
  RECEIVE_NEW_INVITE,
} from '../actions/ui_actions';
import {
  RECEIVE_USERS_SEARCH
} from '../actions/user_actions'

const defaultState = {
  isSideNavHeaderModalOpen: false,
  isChatGroupModalOpen: false,
  chatgroupFormType: null,
  usersSearch: [],
  isUserSearchLoading: false,
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
    case OPEN_CHATGROUP_MODAL:
      newState.isChatGroupModalOpen = true
      newState.isUserInvitesSent = false
      newState.chatgroupFormType = action.formType
      return newState;
    case CLOSE_CHATGROUP_MODAL:
      newState.isChatGroupModalOpen = false
      return newState;
    case OPEN_INVITE_CONFIRM_MODAL:
      newState.isInviteConfirmModalOpen = true
      newState.inviteConfirmModalType = action.entityType
      return newState;
    case CLOSE_INVITE_CONFIRM_MODAL:
      newState.isInviteConfirmModalOpen = false
      return newState;
    case LOADING_USERS_SEARCH:
      newState.loadingUsersSearch = true
      return newState;
    case SENDING_USER_INVITES:
      newState.isUserInvitesSent = true
      return newState;
    case RECEIVE_USERS_SEARCH:
      newState.usersSearch = action.users
      return newState;
    case OPEN_MAGIC_LINK_MODAL:
      newState.currentInviteToken = ''
      newState.isMagicLinkModalOpen = true
      return newState;
    case CLOSE_MAGIC_LINK_MODAL:
      newState.isMagicLinkModalOpen = false
      return newState;
    case RECEIVE_NEW_INVITE:
      newState.currentInviteToken = action.link.token
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
