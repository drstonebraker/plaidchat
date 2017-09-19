import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

// import UserForm from './auth/user_form'

import UserForm from './user_forms/user_form'


const App = ({store}) => (
  <div>
    <UserForm />
  </div>
)

export default App;

// <Route path="/login" component={UserForm} />
