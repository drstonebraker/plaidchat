import React from 'react'

import LogoName from '../logos/logo_name'

const UserForm = (props) => (
  <Link className='logo_name cf' to='/'>
    <img
      className='logo_name__img'
      src='https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png'
      alt='plaidchat logo'/>
    <h4
      className='logo_name__name'>
      plaidchat
    </h4>
  </Link>
)

export default UserForm;
