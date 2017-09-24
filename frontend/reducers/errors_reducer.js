import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import teamErrorsReducer from './team_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  user: userErrorsReducer,
  team: teamErrorsReducer,
});

export default errorsReducer;
