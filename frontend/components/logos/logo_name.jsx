import React from 'react'
import { Link } from 'react-router-dom'

const LogoName = (props) => (
  <Link className={`logo_name ${props.className}`} to='/'>
    <img
      className={`logo_name__img`}
      src='https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png'
      alt='plaidchat logo'/>
    <h4
      className='logo_name__name'>
      plaidchat
    </h4>
  </Link>
)

export default LogoName;
