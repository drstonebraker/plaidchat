import * as ChannelUtil from '../util/api/channel_api_util';


export const RECEIVE_NEW_CHANNEL = 'RECEIVE_NEW_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

export const receiveNewChannel = ({channel, channelMembership}) => ({
  type: RECEIVE_NEW_CHANNEL,
  channel,
  channelMembership,
});

export const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const clearChannelErrors = () => ({
  type: CLEAR_CHANNEL_ERRORS,
})

export const createChannel = channel => dispatch => (
  ChannelUtil.postChannel(channel)
    .then(res => dispatch(receiveNewChannel(res)),
          error => dispatch(receiveChannelErrors(error.responseJSON)))
);
