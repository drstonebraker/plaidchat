import React from 'react'
import Link from 'react-router-dom'

const LogoName = (props) => (
  <Link class='logo_name cf' to='/'>
    <img
      class='logo_name__img'
      src='https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png'
      alt='plaidchat logo'/>
    <h4
      class='logo_name__name'>
      plaidchat
    </h4>
  </Link>
)

export default LogoName;
