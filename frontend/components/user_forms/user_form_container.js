import { connect } from 'react-redux'

import UserForm from './user_form'
import * as ErrorsSelector from '../../selectors/errors_selectors'
import { signup, login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let type;
  let headingContent;
  let submitContent;
  if (ownProps.match.path === '/signup') {
    type = 'signup'
    headingContent = 'Sign up for plaidchat'
    submitContent = 'Sign up'
  } else if (ownProps.match.path === '/login') {
    type = 'login'
    headingContent = 'Log in to plaidchat'
    submitContent = 'Log in'
  }
  const errors = state.errors.session;

  return {
    type,
    headingContent,
    submitContent,
    usernameErrors: ErrorsSelector.getErrors(errors, 'username'),
    passwordErrors: ErrorsSelector.getErrors(errors, 'password'),
    generalErrors: ErrorsSelector.getErrors(errors, 'general'),
    isInvalidUsername: ErrorsSelector.isInvalid(errors, 'username'),
    isInvalidPassword: ErrorsSelector.isInvalid(errors, 'password'),
    hasUsernameErrors: ErrorsSelector.hasErrors(errors, 'username'),
    hasPasswordErrors: ErrorsSelector.hasErrors(errors, 'password'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.match.path === '/signup') {
    action = signup
  } else if (ownProps.match.path === '/login') {
    action = login
  }

  return {
    clearErrors: () => dispatch(clearErrors()),
    action: userCredentials => dispatch(action(userCredentials)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
