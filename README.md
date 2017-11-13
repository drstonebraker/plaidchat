# Plaidchat

## Technologies
Plaidchat is a full-stack application built with a Ruby on Rails backend, a React and Redux frontend, and the WebSocket protocol (implemented with ActionCable). It also utilizes variations of BEM and SMACCS styling conventions.

This project was a learning exercise with a goal of following the functionality and design of an existing online application (slack) in order to build a full-stack app which meets predetermined feature and style specifications.

## Features

#### Live Chat
Users can chat live with any internet-connected user around the world.

#### Magic Link
Users can generate links to invite peers who are or aren't already registered on the site to easily join their chat.

#### Error handling
Forms provide meaning error handling for users.  Styles and components were written to be modular and scalable: forms and form fields are both reusable components with styling and error-handling built-in.

#### Protected routes
Routes are protected on both the frontend and backend to prevent users from accessing unauthorized resources.
![A demonstration showing that users cannot access unauthorized resources](http://res.cloudinary.com/dvcr1kq1u/image/upload/v1510616082/protected_routes_kvig1w.gif)

## Code examples

#### Protected routes

#### Callbacks

#### Custom Validations

#### Clean, modular, expressive code

```js
componentWillReceiveProps(nextProps) {
    this.checkTeamChange(nextProps)
    this.checkChannelsChange(nextProps)
  }

  checkTeamChange (nextProps) {
    const oldTeamId = Number(this.props.match.params.teamId)
    const newTeamId = Number(nextProps.match.params.teamId)
    if (oldTeamId !== newTeamId) {
      this.resetDefaultTeamMembershipId(newTeamId)
    }
  }

  checkChannelsChange (nextProps) {
    const oldTeamChannels = this.props.teamChannels
    const newTeamChannels = nextProps.teamChannels
    if (oldTeamChannels !== newTeamChannels) {
      this.unsubscribeChannels(oldTeamChannels)
      this.subscribeChannels(newTeamChannels)
    }
  }
  ```
