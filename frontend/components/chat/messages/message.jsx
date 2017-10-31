import React from 'react'
import moment from 'moment'

const Message = ({
  id, body, createdAt, username, userId, prevUserId
}) => userId === prevUserId ? (

  <li key={id} className='message'>
    <div className='message_gutter'>
      <span className='message__createdAt message__createdAt--gutter'>
        {moment(createdAt).format('LT')}
      </span>
    </div>
    <div className='message_content'>
      <p className='message__body'>{body}</p>
    </div>

  </li>

) : (

  <li key={id} className='message'>
    <div className='message_gutter'>
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
