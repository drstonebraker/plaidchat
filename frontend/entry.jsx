import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {
    entities: {
      users: {},
      teams: {},
      channels: {},
      messages: {},
    },
    session: {
      currentUser: window.currentUser,
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

  delete window.currentUser

  const root = document.getElementById('root')

  ReactDOM.render(
    <Root store={store}/>,
    root
  )
})
