import React from 'react'

import MainNav from '../navs/main_nav'

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  handleChange(field) {
    return e => {
      const user = Object.assign(
        this.state.user,
        {[field]: e.target.value}
      )
      this.setState({ user })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.user)
      .then(() => this.props.history.push('/'))
  }

  render() {
    const {
        type, headingContent, submitContent, usernameErrors,
        passwordErrors, generalErrors, isInvalidUsername, isInvalidPassword,
        hasUsernameErrors, hasPasswordErrors
      } = this.props
    const { user, errors } = this.state

    const getList = (list) => (
      list.map((error) => (
        <li
          key={error}
          className={`
            form_field__input_tip
            form_field__input_tip--warn
          `}
        >
          {error}
        </li>
      ))
    )

    const usernameErrorsList = getList(usernameErrors);
    const passwordErrorsList = getList(passwordErrors);
    const generalErrorsList = getList(generalErrors);

    return (
      <div className='userform_view'>
        <div className='l-middle-wrapper'>
          <div className="l-form_container l-middle l-form_container--userform">

            <h1
              className="form_container__header">
              {headingContent}
            </h1>

            <form
              className='form'
              onSubmit={this.handleSubmit}
              >

              <div className="form_field">
                <label
                  className='form_field__label'
                  htmlFor='login__username_input'>
                  Username
                </label>
                <input
                  className={`
                    form_field__text_input
                    ${hasUsernameErrors ? 'form_field__text_input--warn' : ''}
                  `}
                  type='text'
                  id='login__username_input'
                  onChange={this.handleChange('username')}
                  value={this.state.username}
                />
                <ul>
                  { usernameErrorsList }
                </ul>
                {
                  type === 'signup' &&
                  <span
                    className={`
                      form_field__input_tip
                      ${isInvalidUsername ? 'form_field__input_tip--warn' : ''}
                    `}
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
                  className={`
                    form_field__text_input
                    ${hasPasswordErrors ? 'form_field__text_input--warn' : ''}
                    `}
                  type='password'
                  id='login__password_input'
                  onChange={this.handleChange('password')}
                  value={this.state.password}
                />
                <ul>
                  { passwordErrorsList }
                </ul>
                {
                  type === 'signup' &&
                  <span
                    className={`
                      form_field__input_tip
                      ${isInvalidPassword ? 'form_field__input_tip--warn' : ''}
                    `}
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
              <ul>
                { generalErrorsList }
              </ul>

            </form>

          </div>
        </div>
      </div>
    )
  }
}



export default UserForm;
