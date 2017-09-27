import React from 'react'

import { CirclePlus } from '../../font_awesome/icons'

class ChannelIndexSection extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { children, headerContent } = this.props

    return (
      <div
        className={`channel_index_section`}
      >
        <h4 className='channel_index_section__header'>
          <span>{ headerContent }</span>
          <CirclePlus
            color='grey'
            style={{
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          />
        </h4>
        { children }
      </div>
    )
  }
}

export default ChannelIndexSection
