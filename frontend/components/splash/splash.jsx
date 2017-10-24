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
          className='splash__bg'
        >
          <source
            src="https://res.cloudinary.com/dvcr1kq1u/video/upload/v1508806099/splash__bg_znmdrn.mp4" 
            type="video/mp4"/>
          <source
            src="https://res.cloudinary.com/dvcr1kq1u/video/upload/v1508806098/splash__bg_emdfrf.ogv" 
            type="video/ogg"/>
        </video>

        <div className='splash__content l-middle'>
          <h3 className='splash__heading splash__heading--h3'>
            Chat for teams
          </h3>
          <div className='splash__action_container'>
            <h6 className='splash__heading splash__heading--h6'>
              A messaging app for teams that need to stay connected... no matter where, no matter when.
            </h6>

            <button
              className='form_button form_button--submit'
              onClick={this.login()}
              type="button"
            >
              Try it now
            </button>
          </div>

        </div>

      </div>
    )
  }
}
