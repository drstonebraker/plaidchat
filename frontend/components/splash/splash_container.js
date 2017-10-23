import { connect } from 'react-redux'

import Splash from './splash'
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: Boolean(state.session.currentUser),
  currentUser: state.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  demoLogin: () => dispatch(
    login({
      username: 'anonymous_alien',
      password: '1t9xbnxtZbYWw8d90wOkMA',
    })
  ),
  logout: () => dispatch(logout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash)
