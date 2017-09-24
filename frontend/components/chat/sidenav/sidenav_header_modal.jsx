
import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import modalStyle from '../../../util/modal_style'
import ModalSection from '../modals/modal_section'

class SidenavHeaderModal extends React.Component {
  constructor(props) {
    super(props)
    this.switchToTeam = this.switchToTeam.bind(this)
  }

  componentDidMount() {

  }

  switchToTeam(teamId) {
    return () => {
      this.props.onRequestClose()
      this.props.history.push(`/messages/${teamId}`)
    }
  }

  logout() {
    return () => {
      this.props.onRequestClose()
      return this.props.logout().then(
        () => this.props.history.push(`/`)
      )
    }
  }

  render() {
    const {
      isOpen, onRequestClose, currentUser, teamName, teams, match
    } = this.props

    const newModalStyle = Object.assign(
      modalStyle,
      { maxHeight: 'calc(100vh - 10.7rem)' }
    )

    const switchTeamLinks = teams.map(team => {
      if (team.id !== parseInt(match.params.teamId)) {
        return (
          <li
            key={team.id}
            onClick={this.switchToTeam(team.id)}
          >
              Switch to <strong>{team.name}</strong>
          </li>
        )
      }
    })
    .filter(el => el)

    return (
      <Modal
        style={ newModalStyle }
        closeTimeoutMS={100}
        contentLabel="User Menu"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <div className="modal_content modal_content--scroll">

          <ModalSection
            heading={currentUser.username}
          >

            <li key='1' onClick={this.logout()} >Sign Out</li>
            <li key='2' onClick={() => {}} >Create a new team</li>

          </ModalSection>

          <ModalSection>
            {switchTeamLinks}
          </ModalSection>

        </div>

      </Modal>
    )
  }
}

export default SidenavHeaderModal
