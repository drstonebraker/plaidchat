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

    return (
      <div>
        <Modal
          style={ newModalStyle }
          closeTimeoutMS={100}
          contentLabel="Magic Invite Link"
          isOpen={isOpen}
          onRequestClose={onRequestClose}
        >
      </Modal>
      </div>
    )
  }
}

export default MagicLinkModal
