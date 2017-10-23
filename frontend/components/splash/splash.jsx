import React from 'react'

export default class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  login() {
    return () => (
      this.props.demoLogin()
        // .then(() => this.props.history.push('/messages'))
    )
  }

  render () {
    return (
      <div className='splash'>
        <video
          loop
          muted
          autoPlay
          className='splash_bg'
        >
          <source src="/assets/splash_bg.mp4" type="video/mp4"/>
          <source src="/assets/splash_bg.ogv" type="video/ogg"/>
        </video>

        

        <button
          className='l-wire_button l-wire_button--thick l-wire_button--white l-middle'
          onClick={this.login()}
          type="button"
        >
          Try it now
        </button>
      </div>
    )
  }
}
