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
      <div className='userform_view'>

        <nav
          className='auth_nav'>

        </nav>

        <div className="l-form_container l-middle l-form_container--userform">

          <h1
            className="form_container__header">
            Log in to plaidchat
          </h1>

          <form className='form'>

            <div className="form_field">
              <label
                className='form_field__label'
                htmlFor='login__username_input'>
                Username
              </label>
              <input
                className='form_field__text_input'
                type='text'
                id='login__username_input'
              />
            </div>

            <div className="form_field">
              <label
                className='form_field__label'
                htmlFor='login__password_input'>
                Password
              </label>
              <input
                className='form_field__text_input'
                type='password'
                id='login__password_input'
              />
            </div>

            <input
              className='form_field__submit form_field__submit--wide'
              type='submit'
              value='Log in →'
              />

          </form>

        </div>
      </div>
    )
  }
}



export default UserForm;
