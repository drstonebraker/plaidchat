import React from 'react'

class MessagesHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  navigate(path) {
    return () => this.props.history.push(path)
  }

  render() {
    const { channel, isDemo } = this.props;

    const authBtn = (value, path) => (
      <button
        type='button'
        className="wire_button wire_button--sm"
        onClick={this.navigate(path)}
      >
        {value}
      </button>
    )

    return (
      <div className='messages_view__header'>
        <div className='messages_header__channel_name'>
          <span>#{channel ? channel.name : ''}</span>
          <div>
            {isDemo && authBtn('Login', '/login')}
            {isDemo && authBtn('Sign Up', '/signup')}
            <button
              type='button'
              className="opaque_button opaque_button--blue opaque_button--sm l-margin_left--12"
              onClick={() => {}}
            >
              Magic Invite Link!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default MessagesHeader
