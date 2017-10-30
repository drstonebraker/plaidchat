import React from 'react'

class MessagesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { messages } = this.props
    console.log(messages);

    return (
      <div className='messages_view__index'>

      </div>
    )
  }
}

export default MessagesIndex
