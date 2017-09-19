import React from 'react'

import LogoName from '../logos/logo_name'

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="form_container">

        <h1
          className="form_container__header">
          Log in to plaidchat
        </h1>

        <form className='form'>

          <div className="form_field">
            <label
              htmlFor='login__username_input'>
              Username
            </label>
            <input
              type='text'
              id='login__username_input'
            />
          </div>

          <div className="form_field">
            <label
              htmlFor='login__password_input'>
              Password
            </label>
            <input
              type='password'
              id='login__password_input'
            />
          </div>

          <input
            type='submit'
            value='Log in ➜'
            />

        </form>

      </div>
    )
  }
}



export default UserForm;
