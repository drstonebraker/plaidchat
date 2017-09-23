import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/store'
import Root from './components/root'
import { receiveCurrentUser } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {
    entities: {
      users: {},
      teams: {},
      channels: {},
      messages: {},
    },
    session: {
      currentUser: window.currentUser ? window.currentUser.user : null,
    },
    ui: {
      isSideNavHeaderModalOpen: false,
    },
    errors: {
      session: {
        username: [],
        password: [],
        general: [],
      },
    }
  }

  const store = configureStore(preloadedState)

  if (window.currentUser) {
    store.dispatch(receiveCurrentUser(window.currentUser))
    delete window.currentUser
  }

  const root = document.getElementById('root')

  ReactDOM.render(
    <Root store={store}/>,
    root
  )
})
