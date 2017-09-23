import * as AuthUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
})

export const signup = user => dispatch => (
  AuthUtil.postUser(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          error => dispatch(receiveSessionErrors(error.responseJSON)))
);

export const login = user => dispatch => (
  AuthUtil.postSession(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          error => dispatch(receiveSessionErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
  AuthUtil.deleteSession()
    .then(emptyUser => dispatch(receiveCurrentUser(null)),
          error => dispatch(receiveSessionErrors(error.responseJSON)))
);
