import React from 'react'

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
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
          />

        </form>
      </div>
    )
  }
}

export default MessageForm
