
import React from 'react'

export const CaretDown = ({color}) => (
  <span className>
    <i
      className={
        `fa fa-angle-down ${color && ('fa-' + color)}`
    }
    aria-hidden={true}
    ></i>
  </span>
)

export const CirclePlus = ({color, style}) => (
  <span className={`fa-stack`} style={style}>
    <i
      className={
        `fa fa-circle-thin fa-stack-2x ${color && ('fa-' + color)}`
      }
    ></i>
    <i
      className={
        `fa fa-plus fa-stack-1x ${color && ('fa-' + color)}`
    }></i>
  </span>
)

export const CircleX = ({color}) => (
  <CirclePlus
    style={{
      transform: 'rotate(45deg)'
    }}
    color={color}
  />
)
