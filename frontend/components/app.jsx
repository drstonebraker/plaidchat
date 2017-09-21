import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

// import UserForm from './auth/user_form'

import MainNav from './navs/main_nav'
import UserFormContainer from './user_forms/user_form_container'


const App = ({store}) => (
  <div>
    <Route exact path="(/login|/signup|/)" component={MainNav} />
    <Route exact path="/signup" component={UserFormContainer} />
    <Route exact path="/login" component={UserFormContainer} />
  </div>
)

export default App;

// <Route path="/login" component={UserForm} />
