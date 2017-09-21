import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/store'
import Root from './components/root'

// TODO: REMOVE TESTING
import * as Actions from './actions/session_actions';
//

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {
    entities: {
      users: {},
      teams: {},
      channels: {},
      messages: {},
    },
    session: {
      currentUser: window.currentUser || null,
    },
    ui: {},
    errors: {
      session: {
        username: [],
        password: [],
        errors: [],
      },
    }
  }

  const store = configureStore(preloadedState)

  // TODO: REMOVE TESTING
  window.store = store
  window.Actions = Actions
  //

  delete window.currentUser

  const root = document.getElementById('root')

  ReactDOM.render(
    <Root store={store}/>,
    root
  )
})
