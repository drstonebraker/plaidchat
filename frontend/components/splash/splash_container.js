import { connect } from 'react-redux'

import Splash from './splash'
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: Boolean(state.session.currentUser),
  currentUser: state.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  signupDemo: () => dispatch(signup({isDemo: true})),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash)
