import React from 'react'
import Modal from 'react-modal'
import merge from 'lodash.merge'

import { modalStyle } from '../../../util/modal_style'

class InviteConfirmModal extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }


  render() {
    const {
      isOpen, chatgroupType
    } = this.props

    const newContent = Object.assign(
      {},
      modalStyle.content,
      {
        top: '1rem',
        right: '1rem',
        bottom: 'unset',
        left: 'unset',
        width: 'auto',
      }
    )

    const newModalStyle = Object.assign(
      {},
      modalStyle,
      { content: newContent }
    )

    return (
      <Modal
        style={ newModalStyle }
        closeTimeoutMS={100}
        contentLabel="User Invite Success Alert"
        isOpen={isOpen}
      >
        <div className="modal_content modal_content--alert">
          <span className='modal_content__icon modal_content__icon--success'>
            ✔
          </span>
          Users added to { chatgroupType }
        </div>

      </Modal>
    )
  }
}

export default InviteConfirmModal
