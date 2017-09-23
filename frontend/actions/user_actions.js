import * as UserUtil from '../util/api/user_api_util';
import { receiveCurrentUser } from './session_actions'

export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const editUser = user => dispatch => (
  UserUtil.patchUser(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          error => dispatch(receiveUserErrors(error.responseJSON)))
);
