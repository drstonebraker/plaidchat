import React from 'react'

import StatusIndicator from './status_indicator'
import SidenavHeaderModalContainer from './sidenav_header_modal_container'
import { CaretDown } from '../../font_awesome/icons'

class ChatSidenavHeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {

  }

  handleClick() {
    if (!this.props.isHeaderModalOpen) {      
      this.props.openHeaderModal()
    }
  }

  render() {
    const { teamName, currentUser } = this.props

    return (
      <div
        className='chat_sidenav_header'
        onClick={this.handleClick}
      >
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

        <SidenavHeaderModalContainer />

      </div>
    )
  }
}

export default ChatSidenavHeader
