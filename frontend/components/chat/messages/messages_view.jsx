import React from 'react'

import MessagesHeaderContainer from './messages_header_container'
import MessagesIndexContainer from './messages_index_container'
import MessageFormContainer from './message_form_container'


class ChatView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { match } = this.props

    return (
      <div className='messages_view'>
        <MessagesHeaderContainer />
        <MessagesIndexContainer />
        <MessageFormContainer />
      </div>
    )
  }
}

export default ChatView;
