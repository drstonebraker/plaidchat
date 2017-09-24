import React from 'react'

export const ErrorsList = ({children}) => {

  const mappedChildren = children.map((error) => (
    <li
      key={error}
      className={`
        form_field__input_tip
        form_field__input_tip--warn
      `}
    >
      {error}
    </li>
  ))

  return (<ul>{ mappedChildren }</ul>)

}
