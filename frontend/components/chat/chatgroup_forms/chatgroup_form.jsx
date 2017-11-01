import React from 'react'
import Select from 'react-select'
import camelCase from 'lodash.camelcase'

import FormFullField from '../../modules/form_full_field'
import { ErrorsList } from '../../modules/jsx_lists'
import X from '../../modules/x.jsx'
import FieldMessages from './field_messages.jsx'

class ChatgroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatgroup: {
        name: '',
      },
      userInvites: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.handleEscKey = this.handleEscKey.bind(this)
    this.handleUsersInvitesChange = this.handleUsersInvitesChange.bind(this)
    this.loadUsersSearch = this.loadUsersSearch.bind(this)
    this.receiveNewChatGroup = this.receiveNewChatGroup.bind(this)
  }

  componentDidMount() {
    this.props.clearChatgroupErrors()
    window.addEventListener("keyup", this.handleEscKey);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.props.clearChatgroupErrors()
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleEscKey);
  }

  handleChange(field) {
    return e => {
      const chatgroup = Object.assign(
        this.state.chatgroup,
        {[field]: e.target.value}
      )
      this.setState({ chatgroup })
    }
  }

  handleEscKey(e) {
    if(e.keyCode === 27){
      this.closeModal()
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      actionType, entityType, sendingUserInvites
    } = this.props
    const {
      channelId, teamId: currentTeamId
    } = this.props.match.params

    // set redux store so confirm modal will open
    if (this.state.userInvites.length > 0) { sendingUserInvites() }

    // build object to send as payload to backend
    const newChatgroup = Object.assign(
      {teamId: currentTeamId},
      this.state.chatgroup,
      { userIds: this.state.userInvites }
    )

    // specify entity to update
    if (actionType === 'invite') {
      newChatgroup.id =  entityType === 'team' ? currentTeamId : channelId
    }

    const formType = camelCase(`${actionType} ${entityType}`)

    this.props[formType](newChatgroup)
      .then(this.receiveNewChatGroup)
  }

  receiveNewChatGroup(action) {
    const {
      closeChatGroupModal, history, entityType
    } = this.props
    const { teamId, defaultChannelId } = action.teamMembership
    closeChatGroupModal()
    history.push(`/messages/${teamId}/${defaultChannelId}`)
    this.triggerInviteConfirmModal(entityType)
  }

  // entityType must be passed in instead of pulled from props
  // b/c it is no longer in props after form is closed
  triggerInviteConfirmModal(entityType) {
    const {
      openInviteConfirmModal, closeInviteConfirmModal, isUserInvitesSent
    } = this.props

    if (isUserInvitesSent) {
      setTimeout(() => {
        openInviteConfirmModal(entityType)
        setTimeout(closeInviteConfirmModal, 3000)
      }, 500)
    }
  }

  closeModal() {
    this.props.closeChatGroupModal()
  }

  handleUsersInvitesChange (users) {
    const userIds = users.map(user => user.id)
		this.setState({
			userInvites: userIds,
		});
	}

  loadUsersSearch (input, callback) {
    input = input.toLowerCase();
    const { teamId, entityType } = this.props
    let query = `query=${input}`
    if (entityType === 'channel') { query += `&team_id=${teamId}` }

    this.props.searchUsers(query).then((action) => {

      var data = {
  			options: action.users,
  		};

      callback(null, data);
    });
	}

  render() {
    const {
        actionType, entityType, headingContent, submitContent, nameErrors, hasNameErrors,
        clearChatgroupErrors, isInvalidName, inviteType
      } = this.props
    const { chatgroup, userInvites } = this.state

    return (
      <div className='chatgroup_form_view'>
        <div className="l-form_container l-middle">

          <h1
            className="form_container__header">
            {headingContent}
          </h1>

          <form
            className='form'
            onSubmit={this.handleSubmit}
            >

            {
              actionType !== 'invite' &&
              <FormFullField
                labelVal='name'
                hasErrors={hasNameErrors}
                inputType='text'
                onChange={this.handleChange('name')}
                inputVal={chatgroup.name}
                errorsList={nameErrors}
                autofocus={true}
                tipValidation={isInvalidName}
                entityType={entityType}
              >
                <FieldMessages type={entityType}/>
              </FormFullField>
            }

            <Select.Async
              className='form_field'
              multi
              value={userInvites}
              onChange={this.handleUsersInvitesChange}
              valueKey='id'
              labelKey='username'
              loadOptions={this.loadUsersSearch}
              noResultsText='No users found'
              placeholder={`Choose ${inviteType} to invite (optional)`}
              searchPromptText='Type to search users...'
            />


            <div className='l-float_children_right'>

              <span>

                <button
                  type='button'
                  onClick={this.closeModal}
                  className='form_button form_button--cancel'
                >
                  Cancel
                </button>

                <input
                  className='form_button form_button--submit'
                  type='submit'
                  value={`${submitContent}`}
                />

              </span>



            </div>


          </form>

        </div>

        <button
          type='button'
          onClick={this.closeModal}
          className='chat_group_form_close'
        >
          <X/>
          <span className='chat_group_form_close__esc'>
            esc
          </span>
        </button>

      </div>
    )
  }
}



export default ChatgroupForm;
