import React from 'react'

const FieldMessages = ({ type, className }) => {

  switch (type) {
    case 'createTeam':
      return (
        <span className={className}>
          Name your team after the group that will be using
          Slack together.
        </span>
      )
    case 'createChannel':
      return (
        <span className={className}>
          Names must be lowercase, without spaces or periods,
          and shorter than 22 characters.
        </span>
      )
    default:
      return null
  }
}

export default FieldMessages
