json.team do
  json.partial! 'api/teams/team', team: @team
end

json.team_membership do
  json.partial! 'api/team_memberships/team_membership',
    team_membership: current_user.find_membership_by_entity(team: @team)
end

json.channels do
  json.array! @team.channels do |channel|
    json.partial! 'api/channels/channel.json.jbuilder', channel: channel
  end
end

json.channel_memberships do
  json.array! current_user.default_team_channel_memberships do |channel_membership|
    json.partial! 'api/channel_memberships/channel_membership.json.jbuilder',
      channel_membership: channel_membership
  end
end

# alternatively:
# json.team_memberships @team.team_memberships,
#   partial: 'api/team_memberships/team_membership',
#   as: :tm
