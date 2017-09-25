import * as TeamUtil from '../util/api/team_api_util';


export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS';
export const CLEAR_TEAM_ERRORS = 'CLEAR_TEAM_ERRORS';

export const receiveTeam = ({team, teamMemberships}) => ({
  type: RECEIVE_TEAM,
  team,
  teamMemberships,
});

export const receiveTeamErrors = errors => ({
  type: RECEIVE_TEAM_ERRORS,
  errors
});

export const clearTeamErrors = () => ({
  type: CLEAR_TEAM_ERRORS,
})

export const createTeam = team => dispatch => (
  TeamUtil.postTeam(team)
    .then(res => dispatch(receiveTeam(res)),
          error => dispatch(receiveTeamErrors(error.responseJSON)))
);
