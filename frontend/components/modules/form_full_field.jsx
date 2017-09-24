import React from 'react'

const FormFullField = ({
  labelVal, hasErrors, inputType, onChange, inputVal,
  errorsList, children, tipValidation, autofocus
}) => {
  const labelCaps = labelVal.charAt(0).toUpperCase() + labelVal.slice(1)
  const inputId = `login__${labelVal}_input`

  // add css class to children listitems
  children = children && React.Children.map(children, child => (
    React.cloneElement(child, {
      className: `
        form_field__input_tip
        ${tipValidation ? 'form_field__input_tip--warn' : ''}
      `
    })
  ))

  return (
    <div className="form_field">
      <label
        className='form_field__label'
        htmlFor={inputId}>
        {labelCaps}
      </label>
      <input
        className={`
          form_field__text_input
          ${hasErrors ? 'form_field__text_input--warn' : ''}
        `}
        type={inputType}
        id={inputId}
        onChange={onChange}
        value={inputVal}
      />
      <ul>
        { errorsList }
      </ul>
      { children }
    </div>
  )
}

export default FormFullField
