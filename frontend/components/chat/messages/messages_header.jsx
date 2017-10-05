import React from 'react'

class MessagesHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { channel } = this.props;

    return (
      <div className='messages_view__header'>
        <div className='messages_header__channel_name'>
          #{channel ? channel.name : ''}
        </div>
      </div>
    )
  }
}

export default MessagesHeader
