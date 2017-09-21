import { connect } from 'react-redux'

import UserForm from './user_form'
import { signup, login } from '../../actions/session_actions';

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

  return { type, headingContent, submitContent };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.match.path === '/signup') {
    action = signup
  } else if (ownProps.match.path === '/login') {
    action = login
  }

  return {
    action: userCredentials => dispatch(action(userCredentials)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
