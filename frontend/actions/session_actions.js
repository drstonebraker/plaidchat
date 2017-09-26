import * as AuthUtil from '../util/api/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = ({
  user, teams, teamMemberships, channelMemberships,
  defaultTeamChannels, defaultTeamDefaultChannelMessages
}) => ({
  type: RECEIVE_CURRENT_USER,
  user,
  teams,
  teamMemberships,
  channelMemberships,
  defaultTeamChannels,
  defaultTeamDefaultChannelMessages,
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
})

export const signup = user => dispatch => (
  AuthUtil.postUser(user)
    .then(currentUserData => dispatch(receiveCurrentUser(currentUserData)),
          error => dispatch(receiveSessionErrors(error.responseJSON)))
);

export const login = user => dispatch => (
  AuthUtil.postSession(user)
    .then(currentUserData => dispatch(receiveCurrentUser(currentUserData)),
          error => dispatch(receiveSessionErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
  AuthUtil.deleteSession()
    .then(emptyUser => dispatch(receiveCurrentUser({user: null})),
          error => dispatch(receiveSessionErrors(error.responseJSON)))
);
