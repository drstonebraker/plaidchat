import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

// import UserForm from './auth/user_form'

import MainNav from './navs/main_nav'
import UserForm from './user_forms/user_form'


const App = ({store}) => (
  <div>
    <Route exact path="(/login|/signup|/)" component={MainNav} />
    <Route exact path="/signup" component={UserForm} />
    <Route exact path="/login" component={UserForm} />
  </div>
)

export default App;

// <Route path="/login" component={UserForm} />
