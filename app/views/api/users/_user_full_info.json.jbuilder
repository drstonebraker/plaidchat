json.user do
  json.partial! 'api/users/user.json.jbuilder', user: user
end

json.teams do
  json.array! user.teams do |team|
    json.partial! 'api/teams/team.json.jbuilder', team: team
  end
end

json.team_memberships do
  json.array! user.team_memberships do |t_m|
    json.partial! 'api/team_memberships/team_membership.json.jbuilder', t_m: t_m
  end
end

json.channel_memberships do
  json.array! user.channel_memberships do |c_m|
    json.partial! 'api/channel_memberships/channel_membership.json.jbuilder', c_m: c_m
  end
end

json.default_team_channels do
  json.array! user.default_team_channels do |d_t_c|
    json.partial! 'api/channels/channel.json.jbuilder', channel: d_t_c
  end
end

# TODO
# json.default_team_default_channel_messages do
#   json.array! user.default_team_default_channel_messages do |d_t_d_c_m|
#     json.partial! 'api/messages/message', message: d_t_d_c_m
#   end
# end
