import React from 'react'
import Modal from 'react-modal'

import { modalStyleFull } from '../../../util/modal_style'
import ChatgroupFormContainer from './chatgroup_form_container'

class ChatgroupModal extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {

    const { isOpen, onRequestClose, type } = this.props

    return (
      <Modal
        style={ modalStyleFull }
        closeTimeoutMS={100}
        contentLabel="New chat group"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <ChatgroupFormContainer />
      </Modal>
    )
  }
}

export default ChatgroupModal
