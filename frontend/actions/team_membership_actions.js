import * as TeamMembershipUtil from '../util/api/team_membership_api_util';

export const RECEIVE_TEAM_MEMBERSHIP = 'RECEIVE_TEAM_MEMBERSHIP';

export const recieveTeamMembership = ({teamMembership}) => ({
  type: RECEIVE_TEAM_MEMBERSHIP,
  teamMembership,
});

export const updateTeamMembership = teamMembership => dispatch => (
  TeamMembershipUtil.patchTeam(teamMembership)
    .then(res => dispatch(recieveTeamMembership(res)))
);
