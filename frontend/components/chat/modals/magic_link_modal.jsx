import React from 'react'
import Modal from 'react-modal'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { modalStyle } from '../../../util/modal_style'
import { CopyIcon } from '../../font_awesome/icons'

class MagicLinkModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCopied: null,
    }

    this.handleCopy = this.handleCopy.bind(this)
  }

  componentDidMount() {

  }

  handleCopy(text, successBool) {
    this.setState({isCopied: successBool})
  }

  render() {
    const { onRequestClose, isOpen, inviteLink } = this.props
    const { isCopied } = this.state

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

        <div className='magic_link_modal'>

          <form
            className='magic_link_modal_form l-cf'
            ref={(form) => { this.form = form }}
          >
            <div className='magic_link_modal_form__input_container'>
              <input
                type='text'
                className='magic_link_modal_form__input'
                value={inviteLink}
                readonly={true}
              />
            </div>

            <CopyToClipboard
              text={inviteLink}
              onCopy={this.handleCopy}>

              <button
                type='button'
                className='magic_link_modal_form__copy'
                title='Copy to clipboard'
              >
                <CopyIcon
                  color='white'
                  size={20}/>
              </button>

            </CopyToClipboard>

          </form>

          <div
            className={`
              form_field__input_tip
              l-center
              ${isCopied === false ? 'form_field__input_tip--warn' : ''}
              ${isCopied === null ? 'u-hidden' : ''}
            `}>
            { isCopied === true ? 'Link copied' : 'Click the blue button to copy' }
            { isCopied === false ? 'Unable to copy. Please copy link manually' : '' }
          </div>

        </div>

      </Modal>
      </div>
    )
  }
}

export default MagicLinkModal
