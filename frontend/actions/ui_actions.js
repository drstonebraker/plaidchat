
export const OPEN_SIDENAV_HEADER_MODAL = 'OPEN_SIDENAV_HEADER_MODAL';
export const CLOSE_SIDENAV_HEADER_MODAL = 'CLOSE_SIDENAV_HEADER_MODAL';
export const OPEN_NEW_TEAM_VIEW_MODAL = 'OPEN_NEW_TEAM_VIEW_MODAL';
export const CLOSE_NEW_TEAM_VIEW_MODAL = 'CLOSE_NEW_TEAM_VIEW_MODAL';

export const openSidenavHeaderModal = () => ({
  type: OPEN_SIDENAV_HEADER_MODAL,
});

export const closeSidenavHeaderModal = () => ({
  type: CLOSE_SIDENAV_HEADER_MODAL,
});

export const openNewTeamViewModal = () => ({
  type: OPEN_NEW_TEAM_VIEW_MODAL,
});

export const closeNewTeamViewModal = () => ({
  type: CLOSE_NEW_TEAM_VIEW_MODAL,
});
