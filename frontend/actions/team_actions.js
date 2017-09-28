import * as TeamUtil from '../util/api/team_api_util';


export const RECEIVE_NEW_TEAM = 'RECEIVE_NEW_TEAM';
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS';
export const CLEAR_CHATGROUP_ERRORS = 'CLEAR_CHATGROUP_ERRORS';

export const receiveNewTeam = ({
  team, teamMembership, channels, channelMemberships
}) => ({
  type: RECEIVE_NEW_TEAM,
  team,
  teamMembership,
  channels,
  channelMemberships,
});

export const receiveTeamErrors = errors => ({
  type: RECEIVE_TEAM_ERRORS,
  errors
});

export const clearChatgroupErrors = () => ({
  type: CLEAR_CHATGROUP_ERRORS,
})

export const createTeam = team => dispatch => (
  TeamUtil.postTeam(team)
    .then(res => dispatch(receiveNewTeam(res)),
          error => dispatch(receiveTeamErrors(error.responseJSON)))
);
