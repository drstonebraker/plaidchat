import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

import UserForm from './auth/user_form'

import LogoName from './logos/logo_name'


const App = ({store}) => (
  <div>
    <LogoName />
  </div>
)

export default App;

// <Route path="/login" component={UserForm} />
