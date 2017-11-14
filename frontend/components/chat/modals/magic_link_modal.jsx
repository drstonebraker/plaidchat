import React from 'react'
import Modal from 'react-modal'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { modalStyle } from '../../../util/modal_style'
import { CopyIcon } from '../../font_awesome/icons'
import LogoIcon from '../../logos/logo_icon'

class MagicLinkModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCopied: null,
    }

    this.handleCopy = this.handleCopy.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleEscKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleEscKey);
  }

  handleCopy(text, successBool) {
    this.setState({isCopied: successBool})
  }

  closeModal() {
    this.setState({isCopied: null})
    this.props.onRequestClose()
  }

  handleEscKey(e) {
    if(e.keyCode === 27){
      this.closeModal()
    }
  }

  render() {
    const { isOpen, inviteToken, channelName } = this.props
    const { isCopied } = this.state

    const inviteLink = `https://www.plaidchat.com/invite/${inviteToken}`

    const newContent = Object.assign(
      {},
      modalStyle.content,
      {
        left: '10vw',
        right: '10vw',
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
          onRequestClose={this.closeModal}
        >

        <div className='magic_link_modal'>


          {
            inviteToken ? (
              <div>
                <div className='magic_link_modal__copy'>
                  <h4 className='magic_link_modal_copy__heading'>
                    🐰🐰 Go forth and multiply 🐰🐰
                  </h4>
                  <p className='magic_link_modal_copy__tip'>
                    Send the link below to anyone you would like to invite to
                    <strong> #{channelName}</strong>
                  </p>
                  {/*<p className='magic_link_modal_copy__tip'>
                    Each link can only be used once, but you may generate as many new
                    links as you would like.
                  </p>*/}
                  <p className='magic_link_modal_copy__tip'>
                    <strong>The more the merrier!</strong>
                  </p>
                </div>

                <form
                  className='magic_link_modal_form l-cf'
                  ref={(form) => { this.form = form }}
                >
                  <div className='magic_link_modal_form__input_container'>
                    <input
                      type='text'
                      className='magic_link_modal_form__input'
                      value={inviteLink}
                      readOnly
                    />
                  </div>

                  <CopyToClipboard
                    text={inviteLink}
                    onCopy={this.handleCopy}>

                    <button
                      type='button'
                      className='magic_link_modal_form__submit'
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
            ) : (
              <div className='l-center u-spin'>
                <LogoIcon size={60}/>
              </div>
            )
          }

        </div>

      </Modal>
      </div>
    )
  }
}

export default MagicLinkModal
