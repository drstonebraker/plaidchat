import * as MessageUtil from '../util/api/message_api_util';


export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages,
});

export const receiveMessageErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});

// export const createChannel = channel => dispatch => (
//   ChannelUtil.postChannel(channel)
//     .then(res => dispatch(receiveNewChannel(res)),
//           error => dispatch(receiveChannelErrors(error.responseJSON)))
// );
//
// export const setDefaultChannel = channelId => dispatch => (
//   ChannelUtil.patchDefaultChannel(channelId)
//     .then(res => dispatch(receiveTeamMembership(res)))
// )
