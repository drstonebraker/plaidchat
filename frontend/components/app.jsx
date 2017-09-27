// just for Auth MVP
import { connect } from 'react-redux'

import { login, logout } from '../actions/session_actions';


class AuthButtons extends React.Component {
  constructor(props) {
    super(props)
  }

  login() {
    return () => (
      this.props.demoLogin()
        // .then(() => this.props.history.push('/messages'))
    )
  }

  render () {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {
          this.props.isLoggedIn &&
          <Route exact path='/' component={() => (
              <button
                onClick={this.props.logout}
                type="button"
              >
                Logout
              </button>
            )} />
        }

        <br/>
        {
          !this.props.isLoggedIn &&
          <Route exact path='/' component={() => (
              <button
                onClick={this.login()}
                type="button"
              >
                Demo Login
              </button>
            )} />
        }
        <br/>
        { JSON.stringify(this.props.currentUser) }
      </div>
    )
  }
}

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

const AuthButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButtons)

// end demo for Auth MVP

import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

import MainNav from './navs/main_nav'
import UserFormContainer from './user_forms/user_form_container'
import ChatViewContainer from './chat/chat_view_container'
import ChannelRedirectContainer from
  './chat/channel_redirects/channel_redirect_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'


const App = ({store}) => (
  <div>
    <AuthRoute exact path="(/login|/signup|/)" component={MainNav} />
    <AuthRoute exact path="(/login|/signup)" component={UserFormContainer} />

    <ProtectedRoute
      path='/messages/:teamId?/:channelId?'
      component={ChannelRedirectContainer}
    />
    <ProtectedRoute
      path='/messages/:teamId/:channelId?'
      component={ChatViewContainer}
    />

    <Route path="/" component={AuthButtonsContainer} />

  </div>
)

export default App;
