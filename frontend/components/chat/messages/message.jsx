import React from 'react'
import moment from 'moment'

const Message = ({ id, body, createdAt, username }) => (
  <li key={id} className='message'>
    <div className='message__gutter'>
      <div className='image_placeholder'></div>
    </div>
    <div className='message_content'>
      <h6>
        <span className='message__username'>
          {username}
        </span>
        <span className='message__createdAt'>
          {moment(createdAt).calendar()}
        </span>
      </h6>
      <p className='message__body'>{body}</p>
    </div>

  </li>
)

export default Message
