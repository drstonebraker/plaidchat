import React from 'react'

import Message from './message'

class MessagesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate(prevProps) {
    const { messages, channelId } = this.props
    if (messages.length > prevProps.messages.length ||
      channelId != prevProps.channelId) {
      this.scrollToBottom()
    }
  }

  scrollToBottom() {
    this.index.scrollTop = this.index.scrollHeight
  }

  render() {
    const { messages } = this.props
    let currentUserId = null;
    const messagesIndex = messages.map((msg) => {
      const prevUserId = currentUserId
      currentUserId = msg.user_id
      return (
          <Message
            prevUserId={currentUserId}
            key={msg.id}
            {...msg} />
      )
    })

    return (
      <div
        ref={container => this.container = container}
        className='messages_view__index_container'>
        <ul
          ref={index => this.index = index}
          className='messages_view__index'>
          { messagesIndex }
        </ul>
      </div>
    )
  }
}

export default MessagesIndex
