import React from 'react'

import Message from './message'

class MessagesIndex extends React.Component {
  constructor(props) {
    super(props)

    this.resetDemoNavPosition = this.resetDemoNavPosition.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.scrollToBottom()
    this.demoNav = document.getElementById('demo_auth_container')
    this.resetDemoNavPosition()
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

  handleScroll() {
    this.resetDemoNavPosition()
  }

  resetDemoNavPosition() {
    const scrollTop = this.container.scrollTop
    const noticeHeight = this.magicLinkNotice.offsetHeight

    if (scrollTop > noticeHeight - 40) {
      this.demoNav.classList.remove('demo_auth_container--hide_magic_link')
    } else {
      this.demoNav.classList.add('demo_auth_container--hide_magic_link')
    }
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
        onScroll={this.handleScroll}
        className='messages_view__index_container'>
        <div className='magic_link_notice' ref={div => this.magicLinkNotice = div}>
          <div className='magic_link_notice__content'>
            <h4 className='magic_link_notice__heading magic_link_notice__heading--bold'>
              🎉&nbsp; Hey teamie!
            </h4>
            <p className='magic_link_notice__heading'>
              💬 Looking for someone to chat with?
            </p>
            <p className='magic_link_notice__copy'>
              Click the button below to generate a unique link you can send to
              anyone, and they'll be able to chat without
              even having to register!
            </p>
            <button
              ref={btn => this.magicLinkButton = btn}
              type='button'
              className="opaque_button opaque_button--blue opaque_button--sm"
              onClick={() => {}}
            >
              Magic Invite Link!
            </button>
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
