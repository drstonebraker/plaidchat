import React from 'react'
import VirtualizedSelect from 'react-virtualized-select'

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
      usersSearch: [],

      clearable: true,
      disabled: false,
      githubUsers: [],
      multi: false,
      searchable: true,
      selectedCreatable: null,
      selectedCity: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.handleEscKey = this.handleEscKey.bind(this)
    this._loadUsersSearch = this._loadUsersSearch.bind(this)

    this._loadGithubUsers = this._loadGithubUsers.bind(this)
  }

  _loadGithubUsers (input) {
    return fetch(`https://api.github.com/search/users?q=${input}`)
      .then((response) => response.json())
      .then((json) => {
        const usersSearch = json.items

        this.setState({ usersSearch })

        return { options: usersSearch }
      })
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

  _loadUsersSearch(query) {
    return fetch(`api/users/search?query=${query}`)
      .then((response) => {
        return response.json()
      })
      .then((usersSearch) => {

        for (let i = 0; i < usersSearch.length; i++) {
          usersSearch[i].className = 'users_search__option'
        }

        this.setState({ usersSearch })

        return { options: usersSearch }
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { teamId: currentTeamId } = this.props.match.params
    const newChatgroup = Object.assign(
      {teamId: currentTeamId},
      this.state.chatgroup
    )

    this.props[this.props.formType](newChatgroup)
      .then((action) => {
        const { teamId, defaultChannelId } = action.teamMembership
        this.props.closeChatGroupModal()
        this.props.history.push(`/messages/${teamId}/${defaultChannelId}`)
      })
  }

  closeModal() {
    this.props.closeChatGroupModal()
  }

  render() {
    const {
        formType, headingContent, submitContent, nameErrors, hasNameErrors,
        clearChatgroupErrors, isInvalidName
      } = this.props
    const { chatgroup, selectedUser, usersSearch } = this.state

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

            <FormFullField
              labelVal='name'
              hasErrors={hasNameErrors}
              inputType='text'
              onChange={this.handleChange('name')}
              inputVal={chatgroup.name}
              errorsList={nameErrors}
              autofocus={true}
              tipValidation={isInvalidName}
              formType={formType}
            >

              <FieldMessages type={formType}/>

            </FormFullField>

            <VirtualizedSelect
              className='form_field'
              multi
              async
              backspaceRemoves={true}
              minimumInput={1}
              onChange={(users) => this.setState({ selectedUser: users })}
              value={selectedUser}
              options={usersSearch}

              valueKey='id'
              labelKey='username'

              loadOptions={this._loadUsersSearch}
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
