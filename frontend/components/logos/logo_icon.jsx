import React from 'react'

const LogoIcon = ({size}) => {

  const styles = {
    container: {
      display: 'inline-block',
      verticalAlign: 'text-bottom',
      padding: size / 15,
      width: size,
      height: size,
    },
    div: {
      position: 'absolute',
      height: size / 5,
      borderRadius: size / 10,
      width: size,
      opacity: 0.8,
      transformOrigin: `${size / 100}rem ${size / 100}rem`
    },
    green: {
      backgroundColor: '#27a57b',
      transform: `rotate(95deg) translate(-${size / 500}rem, -${size / 40}rem)`
    },
    red: {
      backgroundColor: '#cc003d',
      transform: `translate(0, ${size * 0.06}rem)`
    },
    yellow: {
      backgroundColor: '#e09900',
      transform: `rotate(-85deg) translate(-${size * 0.075}rem, ${size * 0.063}rem)`
    },
    blue: {
      backgroundColor: '#1ca8c4',
      transform: `rotate(180deg) translate(-${size * 0.08}rem, -${size * 0.02}rem)`
    },
  }

  return (
    <div style={styles.container}>
      <div style={Object.assign({}, styles.div, styles.green)}></div>
      <div style={Object.assign({}, styles.div, styles.red)}></div>
      <div style={Object.assign({}, styles.div, styles.yellow)}></div>
      <div style={Object.assign({}, styles.div, styles.blue)}></div>
    </div>
  )
}

export default LogoIcon
