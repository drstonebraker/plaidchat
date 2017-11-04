import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

import MainNavContainer from './navs/main_nav_container'
import UserFormContainer from './user_forms/user_form_container'
import ChatViewContainer from './chat/chat_view_container'
import ChannelRedirectContainer from
  './chat/channel_redirects/channel_redirect_container'
import { AuthRoute, DemoAuthRoute, ProtectedRoute } from '../util/route_util'
import SplashContainer from './splash/splash_container'


const App = ({store}) => (
  <div>
    <DemoAuthRoute exact path="(/login|/signup|/)" component={MainNavContainer} />
    <DemoAuthRoute exact path="(/login|/signup)" component={UserFormContainer} />

    <ProtectedRoute
      path='/messages/:teamId?/:channelId?/:superfluous?'
      component={ChannelRedirectContainer}
    />
    <ProtectedRoute
      path='/messages/:teamId/:channelId?'
      component={ChatViewContainer}
    />

    <AuthRoute exact path="/" component={SplashContainer} />

  </div>
)

export default App;
