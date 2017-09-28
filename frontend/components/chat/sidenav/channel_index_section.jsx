import React from 'react'

import { CirclePlus } from '../../font_awesome/icons'

class ChannelIndexSection extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { children, headerContent, openChatGroupModal } = this.props

    return (
      <div
        className={`channel_index_section`}
      >
        <h4 className='channel_index_section__header'>
          <span>{ headerContent }</span>
          <CirclePlus
            onClick={() => openChatGroupModal('createChannel')}
            color='grey'
            style={{
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          />

        </h4>
        <ul>
          { children }
        </ul>
      </div>
    )
  }
}

export default ChannelIndexSection
