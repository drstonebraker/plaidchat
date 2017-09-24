import React from 'react'

import FormFullField from '../modules/form_full_field'

class ChatgroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {
        name: '',
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.props.clearErrors()
    }
  }

  handleChange(field) {
    return e => {
      const team = Object.assign(
        this.state.team,
        {[field]: e.target.value}
      )
      this.setState({ team })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.team, this.props.currentUser)
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



export default ChatgroupForm;
