import React from 'react'

import LogoName from '../logos/logo_name'
import AuthNav from './auth_nav'

const MainNav = (props) => (
  <nav
    className='main_nav'>

    <LogoName
      className='logo_name--main_nav'/>

    <AuthNav />

  </nav>
)

export default MainNav
