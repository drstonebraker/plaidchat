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
    this.container.scrollTop = this.container.scrollHeight
  }

  render() {
    const { messages } = this.props
    const messagesIndex = messages.map((msg) => {
      return (
          <Message key={msg.id} {...msg} />
      )
    })

    return (
      <div
        ref={container => this.container = container}
        className='messages_view__index_container'>
        <ul className='messages_view__index'>
          { messagesIndex }
        </ul>
      </div>
    )
  }
}

export default MessagesIndex
