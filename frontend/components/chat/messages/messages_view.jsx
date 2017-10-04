import React from 'react'


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
        <MessagesContainer />
        <MessageFormContainer />
      </div>
    )
  }
}

export default ChatView;
