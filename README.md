# README

[Plaidchat](https://plaidchat.herokuapp.com) is portfolio project aiming to clone the core features and design of [slack](https://slack.com/), a browser-based team chat platform.  It's service enables any group of people to create a private chat application (called a team) with various chat rooms (called channels) -- usually organized by topic.  Members of a team can communicate with each other remotely over the internet by using the live messaging service made available by slack (and plaidchat).


## Features

+ Secure user authentication
+ Users can create their own teams
+ Users can create their own channels
+ Global team available to every user
+ Unique Demo team available each user, demonstrating the features of the application

## Future Features

+ Users can invite other users to join a team or channel
+ Users can invite non-users to sign up
+ A live chat stream on every channel
+ Users can send direct messages to other users in their team
+ Users can upload images to be used as avatars on their profile

## Stack

+ Ruby on Rails
+ PostgreSQL
+ React
+ Redux

## Learning Goals

+ Build a clean, modular full-stack web application using Rails, React, and Redux.
+ Learn the features and best-practices of using the Sass preprocessor, including mixins and SMACSS
+ Utilize rails callbacks to dynamically generate database records based on user interaction.
+ Implement secure authenticated routes, disabling users from accessing unauthorized resources.
+ Learn and implement the WebSocket protocol for live updates and real-time client-server interaction.

## Details

#### Frontend

**Program Design**
The design of my frontend program is based on best-practices developed for React and Redux technologies.  All user data is saved into a global redux store, normalized into separate objects/reducers for modularity and maintainability.  Data is retrieved from a backend api as-needed, and cached on the frontend to enable high performance on every user interaction with the application.

**Authentication**
I installed protected routes which intelligently redirect the user away from unauthorized resources and either back to their most recently-visited channels (if logged in) or to a session log in form.

**User Experience**
To demonstrate my ability to implement a full range of style-based feature, plaidchat's design was based almost entirely off that of slack itself, with modifications made only when appropriate to accommodate the slightly different feature sets of the two applications.

Styles were written with attention paid to modularity, maintainability, and best-practices -- allowing for greater speed of development and demonstrating the modularity skills necessary for larger team projects.

#### Backend

**Database**
All user data is persisted to a remote SQL (postgres) relational database.
The application has rails ActiveRecord models to represent users and their settings, teams, channels, messages, and the relationships that exist between each of them.  With this in place, I was able to add ActiveRecord callbacks which automatically generate appropriate records as users interact with the website. For example, when a user first signs up, they are automatically subscribed to the Global team and its default channels, and a new Demo team is created for them to use as well.

**Authentication**
All api routes which are used to service the frontend on-demand requests for data are securely protected from unauthorized access, such as cross-site request forgery and users who are not logged in.
