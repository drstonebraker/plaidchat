import * as UserUtil from '../util/api/user_api_util';
import { receiveCurrentUser } from './session_actions'

export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_USERS_SEARCH = 'RECEIVE_USERS_SEARCH';

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const receiveUsersSearch = users => ({
  type: RECEIVE_USERS_SEARCH,
  users
})

export const editUser = user => dispatch => (
  UserUtil.patchUser(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          error => dispatch(receiveUserErrors(error.responseJSON)))
);

export const searchUsers = query => dispatch => (
  UserUtil.getUsersSearch(query)
    .then(users => dispatch(receiveUsersSearch(users)),
          error => console.log('error: ', error))
);
