json.channel do
  json.partial! 'api/channels/channel', channel: @channel
end

json.channel_membership do
  json.partial! 'api/channel_memberships/channel_membership',
    c_m: current_user.find_membership_by_entity(channel: @channel)
end
