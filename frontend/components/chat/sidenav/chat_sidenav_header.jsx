import React from 'react'

import StatusIndicator from './status_indicator'
import { CaretDown } from '../../font_awesome/icons'

class ChatSidenavHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { teamName, currentUser } = this.props

    return (
      <div className='chat_sidenav_header'>
        <div className='chat_sidenav_header__heading'>
          <h1 className='chat_sidenav_header__teamname'>
            { teamName }
          </h1>
          <CaretDown color='grey' size='1.6rem' />
        </div>

        <div>
          <StatusIndicator />
          <h4 className='chat_sidenav_header__username'>
            { currentUser.username }
          </h4>
        </div>

      </div>
    )
  }
}

export default ChatSidenavHeader
