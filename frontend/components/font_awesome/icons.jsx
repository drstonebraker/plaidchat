
import React from 'react'

export const CaretDown = ({color, size}) => (
  <span className>
    <i
      style={{'fontSize': size}}
      className={
        `fa fa-angle-down ${color && ('fa-' + color)}`
    }
    aria-hidden={true}
    ></i>
  </span>
)

export const CirclePlus = ({color, style, size, onClick}) => (
  <span
    onClick={onClick}
    className={`
      fa-stack
      ${color ? ('fa-' + color) : ''}
      fa-${size}
    `}
    style={style}
  >
    <i
      className={
        `fa fa-circle-thin fa-stack-2x`
      }
    ></i>
    <i
      className={
        `fa fa-plus fa-stack-1x`

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
