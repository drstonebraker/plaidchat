import React from 'react'

const AuthButton = ({value, onClick, className}) => (
  <button
    type='button'
    className={className}
    onClick={onClick}
  >
    {value}
  </button>
)

export default AuthButton
