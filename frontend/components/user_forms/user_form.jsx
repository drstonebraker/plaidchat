import React from 'react'

import MainNav from '../navs/main_nav'

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    if (this.props.match.path == '/signup') {
      this.type = 'signup'
    } else if (this.props.match.path == '/login') {
      this.type = 'login'
    }
  }

  render() {
    let headingContent;
    let submitContent;
    if (this.type == 'signup') {
      headingContent = 'Sign up for plaidchat'
      submitContent = 'Sign up'
    } else if (this.type == 'login') {
      headingContent = 'Log in to plaidchat'
      submitContent = 'Log in'
    }


    return (
      <div className='userform_view'>
        <div className=''>
          <div className="l-form_container l-middle l-form_container--userform">

            <h1
              className="form_container__header">
              {headingContent}
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
                {
                  this.type == 'signup' &&
                  <span
                    className='form_field__input_tip'
                  >
                    Please choose a username that is all lowercase,
                    containing only letters, numbers, periods, hyphens,
                    and underscores.
                  </span>
                }
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
                {
                  this.type == 'signup' &&
                  <span
                    className='form_field__input_tip'
                  >
                    Passwords must be at least 6 characters long,
                    and can't be things like <em>password</em>,
                    <em>123456</em>, or <em>abcdef</em>.
                  </span>
                }
              </div>

              <input
                className='form_field__submit form_field__submit--wide'
                type='submit'
                value={`${submitContent} →`}
                />

            </form>

          </div>
        </div>
      </div>
    )
  }
}



export default UserForm;
