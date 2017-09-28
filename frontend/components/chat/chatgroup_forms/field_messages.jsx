import React from 'react'

const FieldMessages = ({ type }) => {

  switch (type) {
    case 'createTeam':
      return (
        <span className='form_field__input_tip'>
          Name your team after the group that will be using
          Slack together.
        </span>
      )
    case 'createChannel':
      return (
        <span className='form_field__input_tip'>
          Names must be lowercase, without spaces or periods,
          and shorter than 22 characters.
        </span>
      )
  }
}

export default FieldMessages
