json.user do
  json.partial! 'api/users/user.json.jbuilder', user: user
end

if user == current_user

  json.teams do
    json.array! user.teams do |team|
      json.partial! 'api/teams/team.json.jbuilder', team: team
    end
  end

  json.team_memberships do
    json.array! user.team_memberships do |team_membership|
      json.partial! 'api/team_memberships/team_membership.json.jbuilder',
        team_membership: team_membership
    end
  end

  json.channels do
    json.array! user.channels do |channel|
      json.partial! 'api/channels/channel.json.jbuilder', channel: channel
    end
  end

  json.channel_memberships do
    json.array! user.channel_memberships do |channel_membership|
      json.partial! 'api/channel_memberships/channel_membership.json.jbuilder',
        channel_membership: channel_membership
    end
  end

  json.default_team_default_channel_messages do
    json.array! user.default_team_default_channel_messages.recent do |default_team_default_channel_message|
      json.partial! 'api/messages/message', message: default_team_default_channel_message
    end
  end

end
