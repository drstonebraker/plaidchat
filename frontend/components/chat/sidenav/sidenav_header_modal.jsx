import React from 'react'

import Modal from 'react-modal'

class SidenavHeaderModal extends React.Component {
  constructor(props) {
    super(props)
    this.style = {
      overlay: {
        backgroundColor: 'transparent',
      },
      content: {
        position: 'fixed',
        zIndex: 10,
        top: '5.7rem',
        left: '1rem',
        bottom: '4.3rem',
        width: '28.5rem',
        border: 'none',
        borderRadius: '0.5rem',
        overflowY: 'scroll',
        boxShadow: '0 0 0 0.1rem rgba(0, 0, 0, .1),' +
          ' 0 0.5rem 1.4rem rgba(10, 10, 10, .2)'
      }
    }
  }

  componentDidMount() {

  }

  render() {
    const { isOpen, onRequestClose } = this.props

    return (
      <Modal
        style={this.style}
        isOpen={true}
        onRequestClose={onRequestClose}
      >
        <h2>Im a modal!</h2>
        <p>modal modal modal modal modal</p>
        <p>mooooooooodal!</p>
      </Modal>
    )
  }
}

export default SidenavHeaderModal
