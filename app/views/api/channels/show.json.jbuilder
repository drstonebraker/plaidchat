json.channel do
  json.partial! 'api/channels/channel', channel: @channel
end

json.channel_membership do
  json.partial! 'api/channel_memberships/channel_membership',
    channel_membership: current_user.find_membership_by_entity(channel: @channel)
end

json.team_membership do
  json.partial! 'api/team_memberships/team_membership', t_m: current_user.default_team_membership
end
