import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/root_reducer'

// condition middleware based on production/development
const middlewares = [thunk];
let middlewaresWithDevTools;
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);

}
const { composeWithDevTools } = require('redux-devtools-extension')
middlewaresWithDevTools = composeWithDevTools(applyMiddleware(...middlewares))


const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    middlewaresWithDevTools || applyMiddleware(...middlewares))
)

export default configureStore
