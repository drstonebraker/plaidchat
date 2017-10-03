
export const OPEN_SIDENAV_HEADER_MODAL = 'OPEN_SIDENAV_HEADER_MODAL';
export const CLOSE_SIDENAV_HEADER_MODAL = 'CLOSE_SIDENAV_HEADER_MODAL';
export const OPEN_CHATGROUP_MODAL = 'OPEN_CHATGROUP_MODAL';
export const CLOSE_CHATGROUP_MODAL = 'CLOSE_CHATGROUP_MODAL';
export const OPEN_INVITE_CONFIRM_MODAL = 'OPEN_INVITE_CONFIRM_MODAL';
export const CLOSE_INVITE_CONFIRM_MODAL = 'CLOSE_INVITE_CONFIRM_MODAL';
export const LOADING_USERS_SEARCH = 'LOADING_USERS_SEARCH';
export const SENDING_USER_INVITES = 'SENDING_USER_INVITES';

export const openSidenavHeaderModal = () => ({
  type: OPEN_SIDENAV_HEADER_MODAL,
});

export const closeSidenavHeaderModal = () => ({
  type: CLOSE_SIDENAV_HEADER_MODAL,
});

export const openChatGroupModal = (formType) => ({
  type: OPEN_CHATGROUP_MODAL,
  formType
});

export const closeChatGroupModal = () => ({
  type: CLOSE_CHATGROUP_MODAL,
});

export const openInviteConfirmModal = (formType) => ({
  type: OPEN_INVITE_CONFIRM_MODAL,
  formType
});

export const closeInviteConfirmModal = () => ({
  type: CLOSE_INVITE_CONFIRM_MODAL,
});

export const loadingUsersSearch = () => ({
  type: LOADING_USERS_SEARCH,
});

export const sendingUserInvites = () => ({
  type: SENDING_USER_INVITES,
});
