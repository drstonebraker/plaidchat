import React from 'react'

const ModalSection = ({ heading, children, avatarUrl }) => {
  // add css class to children listitems
  children = React.Children.map(children, child => (
    React.cloneElement(child, {
      className: `modal_list_item ${child.props.className}`
    })
  ))

  return (
    <div className='modal_section'>

      {
        heading &&
        <h2 className='modal_section_header'>
          <img className='avatar_image' src={avatarUrl}/>
          <span className='modal_section_header__heading'>
            { heading }
          </span>
        </h2>
      }

      <ul>
        { children }
      </ul>

    </div>
  )
}

export default ModalSection
