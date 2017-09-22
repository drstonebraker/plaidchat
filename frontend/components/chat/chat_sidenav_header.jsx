import React from 'react'

import { CaretDown } from '../font_awesome/icons'

class ChatSidenavHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { teamName } = this.props

    return (
      <div className='chat_sidenav_header'>
        <div>
          <h1 className='chat_sidenav_header__heading'>
            { teamName }
          </h1>
          <CaretDown color='grey' />
        </div>

        <h4 className='chat_sidenav_header__username'>

        </h4>
      </div>
    )
  }
}

export default ChatSidenavHeader
