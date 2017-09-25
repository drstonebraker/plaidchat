json.user do
  json.partial! 'api/users/user', user: user
end

json.teams do
  json.array! user.teams do |team|
    json.partial! 'api/teams/team', team: team
  end
end

json.team_memberships do
  json.array! user.team_memberships do |tm|
    json.partial! 'api/team_memberships/team_membership', tm: tm
  end
end
