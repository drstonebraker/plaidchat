import { connect } from 'react-redux'

import Splash from './splash'
import { signupDemo } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: Boolean(state.session.currentUser),
  currentUser: state.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  signupDemo: () => dispatch(signupDemo()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash)
