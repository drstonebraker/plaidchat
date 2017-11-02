import React from 'react'
import { Link } from 'react-router-dom'

import LogoIcon from './logo_icon'

const LogoName = (props) => (
  <Link className={`logo_name ${props.className}`} to='/'>
    {/*<img
      className={`logo_name__img`}
      src='https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png'
      alt='plaidchat logo'/>*/}
    <LogoIcon size={26} />
    <h4
      className='logo_name__name'>
      plaidchat
    </h4>
  </Link>
)

export default LogoName;
