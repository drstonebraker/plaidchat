
import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import { modalStyle } from '../../../util/modal_style'
import ModalSection from '../modals/modal_section.jsx'
import getSwitchTeamLinks from './get_switch_team_links.jsx'

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

  openChatGroupForm(type) {
    this.props.onRequestClose()
    this.props.openChatGroupModal(type)
  }

  openNewTeamForm() {
    this.props.onRequestClose()
    this.props.openChatGroupModal('createTeam')
  }

  openTeamInviteForm() {

  }

  openChannelInviteForm() {

  }

  render() {
    const {
      isOpen, onRequestClose, currentUser, teamName, channelName,
      teams, match
    } = this.props

    const newModalStyle = Object.assign(
      modalStyle,
      {
        maxHeight: 'calc(100vh - 10.7rem)'
      }
    )

    const switchTeamLinks = getSwitchTeamLinks(
      teams, match.params.teamId, this.switchToTeam
    )

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
            avatarUrl={currentUser.avatarUrl}
          >

            <li key='1' onClick={this.logout()} >
              Sign Out
            </li>
            <li key='2' onClick={() => this.openChatGroupForm('createTeam')} >
              Create a new team
            </li>

          </ModalSection>

          <ModalSection
            heading={teamName}
          >

            <li key='3' onClick={() => this.openChatGroupForm('inviteTeam')} >
              Add users to team <strong>{teamName}</strong>
            </li>
            <li key='4' onClick={() => this.openChatGroupForm('inviteChannel')} >
              Add users to <strong>#{channelName}</strong>
            </li>

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
