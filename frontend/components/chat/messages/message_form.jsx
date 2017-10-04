import React from 'react'

import Plus from '../../modules/plus'

class MessageForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault();
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className='messages_view__footer'>
        <form className='message_form l-cf'>
          <input
            type='submit'
            className='message_form__submit'
            value=''
            onClick={this.handleSubmit}
          />
          <Plus />

        </form>
      </div>
    )
  }
}

export default MessageForm
