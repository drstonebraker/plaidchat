import React from 'react'
import { Route, withRouter } from 'react-router-dom'

class AuthNav extends React.Component {
  constructor(props) {
    super(props)
    this.navigate = this.navigate.bind(this)
  }

  navigate(path) {
    return () => this.props.history.push(path)
  }

  render () {
    const authBtn = (value, path) => (
      <button
        className="l-wire_button"
        onClick={this.navigate(path)}
      >
        {value}
      </button>
    )

    return (
      <div className={`${this.props.className}`}>
        <Route exact path="/" render={() => (
          <div>
            {authBtn('Login', 'login')}
            {authBtn('Sign Up', 'signup')}
          </div>
        )} />
      <Route exact path="/login" render={() => (
          <div>
            {authBtn('Sign Up', 'signup')}
          </div>
        )} />
      <Route exact path="/signup" render={() => (
        <div>
          {authBtn('Login', 'login')}
        </div>
        )} />
      </div>
    )
  }
}

export default withRouter(AuthNav);
