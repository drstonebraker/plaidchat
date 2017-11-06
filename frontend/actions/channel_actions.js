import * as ChannelUtil from '../util/api/channel_api_util';

export const RECEIVE_NEW_CHANNEL = 'RECEIVE_NEW_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

export const receiveNewChannel = ({channel, channelMembership, teamMembership}) => ({
  type: RECEIVE_NEW_CHANNEL,
  channel,
  channelMembership,
  teamMembership
});

export const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const createChannel = channel => dispatch => (
  ChannelUtil.postChannel(channel)
    .then(res => dispatch(receiveNewChannel(res)),
          error => dispatch(receiveChannelErrors(error.responseJSON)))
);

export const inviteChannel = channel => dispatch => (
  ChannelUtil.inviteChannel(channel)
    .then(res => dispatch(receiveNewChannel(res)),
          error => dispatch(receiveChannelErrors(error.responseJSON)))
);

// export const setDefaultChannel = channelId => dispatch => (
//   ChannelUtil.patchDefaultChannel(channelId)
//     .then(res => dispatch(receiveTeamMembership(res)))
// )
