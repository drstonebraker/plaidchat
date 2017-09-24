import React from 'react'

import { ErrorsList } from './jsx_lists'

class FormFullField extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.autofocus()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.formType !== nextProps.formType) {
      this.autofocus()
    }
  }

  autofocus() {
    if (this.props.autofocus) {
      this.input.focus();
    }
  }

  render() {

    const {
      labelVal, hasErrors, inputType, onChange, inputVal,
      errorsList, children, tipValidation
    } = this.props

    const labelCaps = labelVal.charAt(0).toUpperCase() + labelVal.slice(1)
    const inputId = `login__${labelVal}_input`

    // add css class to children listitems
    const mappedChildren = children && React.Children.map(children, child => (
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
          ref={input => { this.input = input }}
        />

        <ErrorsList>{errorsList}</ErrorsList>

        { mappedChildren }
      </div>
    )
  }
}

export default FormFullField
