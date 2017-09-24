import React from 'react'

import FormFullField from '../../modules/form_full_field'
import { ErrorsList } from '../../modules/jsx_lists'

class ChatgroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {
        name: '',
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.props.clearErrors()
    }
  }

  handleChange(field) {
    return e => {
      const team = Object.assign(
        this.state.team,
        {[field]: e.target.value}
      )
      this.setState({ team })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeChatGroupModal()
    this.props[this.props.formType](this.state.team)
      .then(() => this.props.history.push('/messages'))
  }

  render() {
    const {
        type, headingContent, submitContent, nameErrors, hasNameErrors,
        clearErrors, action
      } = this.props
    const { team } = this.state

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
              inputVal={team.name}
              errorsList={nameErrors}
            >

              {
                type === 'signup' &&
                <span>
                  Name your team after the group that will be using
                  Slack together.
                </span>
              }

            </FormFullField>

            <input
              className='form_field__submit'
              type='submit'
              value={`${submitContent} →`}
            />

          </form>

        </div>
      </div>
    )
  }
}



export default ChatgroupForm;
