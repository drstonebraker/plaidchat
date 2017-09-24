
export const OPEN_SIDENAV_HEADER_MODAL = 'OPEN_SIDENAV_HEADER_MODAL';
export const CLOSE_SIDENAV_HEADER_MODAL = 'CLOSE_SIDENAV_HEADER_MODAL';
export const OPEN_CHATGROUP_MODAL = 'OPEN_CHATGROUP_MODAL';
export const CLOSE_CHATGROUP_MODAL = 'CLOSE_CHATGROUP_MODAL';

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
