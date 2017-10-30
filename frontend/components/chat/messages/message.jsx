import React from 'react'
import moment from 'moment'

const Message = ({ id, body, createdAt, username }) => (
  <li key={id} className='message'>

    <p className='message__body'>{body}</p>
  </li>
)

export default Message
