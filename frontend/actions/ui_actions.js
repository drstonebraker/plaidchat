import * as InviteUtil from '../util/api/invite_api_util';

export const OPEN_SIDENAV_HEADER_MODAL = 'OPEN_SIDENAV_HEADER_MODAL';
export const CLOSE_SIDENAV_HEADER_MODAL = 'CLOSE_SIDENAV_HEADER_MODAL';
export const OPEN_CHATGROUP_MODAL = 'OPEN_CHATGROUP_MODAL';
export const CLOSE_CHATGROUP_MODAL = 'CLOSE_CHATGROUP_MODAL';
export const OPEN_INVITE_CONFIRM_MODAL = 'OPEN_INVITE_CONFIRM_MODAL';
export const CLOSE_INVITE_CONFIRM_MODAL = 'CLOSE_INVITE_CONFIRM_MODAL';
export const LOADING_USERS_SEARCH = 'LOADING_USERS_SEARCH';
export const SENDING_USER_INVITES = 'SENDING_USER_INVITES';
export const OPEN_MAGIC_LINK_MODAL = 'OPEN_MAGIC_LINK_MODAL';
export const CLOSE_MAGIC_LINK_MODAL = 'CLOSE_MAGIC_LINK_MODAL';
export const RECEIVE_NEW_INVITE = 'RECEIVE_NEW_INVITE';

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

export const openInviteConfirmModal = (entityType) => ({
  type: OPEN_INVITE_CONFIRM_MODAL,
  entityType
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

export const openMagicLinkModal = () => ({
  type: OPEN_MAGIC_LINK_MODAL,
});

export const closeMagicLinkModal = () => ({
  type: CLOSE_MAGIC_LINK_MODAL,
});

export const receiveNewInvite = (link) => ({
  type: RECEIVE_NEW_INVITE,
  link
});

export const createInvite = invite => dispatch => (
  InviteUtil.postInvite(invite)
    .then(res => dispatch(receiveNewInvite(res))
);
