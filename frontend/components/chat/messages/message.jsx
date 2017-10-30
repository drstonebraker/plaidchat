import React from 'react'

const Message = ({ id, body, createdAt }) => (
  <li key={id} className='message'>
    <p className='message__body'>{body}</p>
  </li>
)

export default Message
