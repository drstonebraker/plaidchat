import React from 'react'

import Plus from '../../modules/plus'

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  componentDidMount () {

  }

  componentWillUnmount () {
    this.handleBlur()
  }

  handleSubmit (e) {
    if (e) { e.preventDefault(); }

    console.log('submitting: ', this.state.value);

    this.setState({
      value: ''
    })
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  handleFocus (e) {
    this.form.classList.add('message_form--focus')
  }

  handleBlur (e) {
    this.form.classList.remove('message_form--focus')
  }

  render() {
    const { channel } = this.props
    const { value } = this.state

    return (
      <div className='messages_view__footer'>
        <form
          className='message_form l-cf'
          ref={(form) => { this.form = form }}
        >
          <input
            type='submit'
            className='message_form__submit'
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value=''
            onClick={this.handleSubmit}
          />
          <Plus />

          <div className='message_form__input_container'>
            <input
              type='text'
              className='message_form__input'
              placeholder={`Message #${channel}`}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={value}
            />
          </div>

        </form>
      </div>
    )
  }
}

export default MessageForm
