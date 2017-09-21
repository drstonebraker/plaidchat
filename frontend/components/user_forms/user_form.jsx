import React from 'react'

import MainNav from '../navs/main_nav'

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(
        () => this.props.history.push('/'),
        () => console.log('ERROR!')
      )
  }

  render() {
    const { headingContent, submitContent, type } = this.props

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
                  className='form_field__text_input'
                  type='text'
                  id='login__username_input'
                  onChange={this.handleChange('username')}
                  value={this.state.username}
                />
                {
                  type == 'signup' &&
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
                  onChange={this.handleChange('password')}
                  value={this.state.password}
                />
                {
                  type == 'signup' &&
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
