import React from 'react'
import Modal from 'react-modal'

import { modalStyle } from '../../../util/modal_style'

class MagicLinkModal extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { onRequestClose, isOpen } = this.props

    const newContent = Object.assign(
      {},
      modalStyle.content,
      {
        left: '5rem',
        right: '5rem',
        bottom: 'unset',
        top: '50vh',
        width: 'auto',
        transform: 'translateY(-50%)',
      }
    )

    const newModalStyle = Object.assign(
      {},
      modalStyle,
      { content: newContent }
    )

    return (
      <div>
        <Modal
          style={ newModalStyle }
          closeTimeoutMS={100}
          contentLabel="Magic Invite Link"
          isOpen={isOpen}
          onRequestClose={onRequestClose}
        >

        <div>
          asdfasdfasdkhalskjdhflkasjhfd
        </div>

      </Modal>
      </div>
    )
  }
}

export default MagicLinkModal
