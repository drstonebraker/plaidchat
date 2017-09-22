import { combineReducers } from 'redux';

import teamEntitiesReducer from './team_entities_reducer.js';
import userEntitiesReducer from './user_entities_reducer.js';
import teamMembershipEntitiesReducer from
  './team_membership_entities_reducer.js';

const entitiesReducer = combineReducers({
  users: userEntitiesReducer,
  teams: teamEntitiesReducer,
  teamMemberships: teamMembershipEntitiesReducer,
  channels: () => ({}),
  channelMemberships: () => ({}),
  messages: () => ({}),
});

export default entitiesReducer;
