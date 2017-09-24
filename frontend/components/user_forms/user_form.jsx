import React from 'react'

import MainNav from '../navs/main_nav'
import FormFullField from '../modules/form_full_field'

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

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearErrors()
    }
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
      .then(() => this.props.history.push('/messages'))
  }

  render() {
    const {
        type, headingContent, submitContent, usernameErrors,
        passwordErrors, generalErrors, isInvalidUsername, isInvalidPassword,
        hasUsernameErrors, hasPasswordErrors
      } = this.props
    const { user } = this.state

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

              <FormFullField
                labelVal='username'
                hasErrors={hasUsernameErrors}
                inputType='text'
                onChange={this.handleChange('username')}
                inputVal={this.state.username}
                errorsList={usernameErrorsList}
                tipValidation={isInvalidUsername}
                autofocus={true}
                formType={type}
              >

                {
                  type === 'signup' &&
                  <span>
                    Please choose a username that is all lowercase,
                    containing only letters, numbers, periods, hyphens,
                    and underscores.
                  </span>
                }

              </FormFullField>

              <FormFullField
                labelVal='password'
                hasErrors={hasPasswordErrors}
                inputType='password'
                onChange={this.handleChange('password')}
                inputVal={this.state.password}
                errorsList={passwordErrorsList}
                tipValidation={isInvalidPassword}
                formType={type}
              >

              {
                type === 'signup' &&
                <span>
                  Passwords must be at least 6 characters long,
                  and can't be things like <em>password</em>,
                  <em>123456</em>, or <em>abcdef</em>.
                </span>
              }

              </FormFullField>

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
