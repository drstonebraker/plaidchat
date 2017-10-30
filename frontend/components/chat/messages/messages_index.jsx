import React from 'react'

import Message from './message'

class MessagesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { messages } = this.props
    const messagesIndex = messages.map((msg) => {
      return (
          <Message key={msg.id} {...msg} />
      )
    })

    return (
      <div className='messages_view__index_container'>
        <ul className='messages_view__index'>
          { messagesIndex }
        </ul>
      </div>
    )
  }
}

export default MessagesIndex
