import React from 'react'
import { Link } from 'react-router-dom'

import LogoIcon from './logo_icon'

const LogoName = ({ className, isDemo }) => (
  <Link className={`logo_name ${className}`} to={isDemo ? '/messages' : '/'}>
    <LogoIcon size={26} />
    <h4
      className='logo_name__name'>
      plaidchat
    </h4>
  </Link>
)

export default LogoName;
