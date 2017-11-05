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
    let currentUserId = null;
    let currentCreatedAt = 0;
    const messagesIndex = messages.map((msg) => {
      const prevUserId = currentUserId
      const prevCreatedAt = currentCreatedAt
      currentUserId = msg.userId
      currentCreatedAt = msg.createdAt
      return (
          <Message
            prevUserId={prevUserId}
            prevCreatedAt={prevCreatedAt}
            key={msg.id}
            {...msg} />
      )
    })

    return (
      <div
        ref={container => this.container = container}
        className='messages_view__index_container'>
        <div className='magic_link_notice'>
          <div className='l-middle'>
            <h4>Hey teamie!</h4>
            <p>Looking for someone to chat with?</p>
            <p>
              Click the button below to generate a unique link you can send to
              anyone, and they'll be able to chat with you right away without
              even having to sign in or register!
            </p>
          </div>
          <div className='magic_link_notice__zigzag'></div>
        </div>
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
