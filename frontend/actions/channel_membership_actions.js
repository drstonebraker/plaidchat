import * as ChannelMembershipUtil from
  '../util/api/channel_membership_api_util';

export const RECEIVE_CHANNEL_MEMBERSHIP = 'RECEIVE_CHANNEL_MEMBERSHIP';

export const receiveChannelMembership = ({channelMembership}) => ({
  type: RECEIVE_CHANNEL_MEMBERSHIP,
  channelMembership,
});
