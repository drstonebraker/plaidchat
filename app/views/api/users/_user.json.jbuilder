json.user do
  json.extract! user, :id, :username, :default_team_id
end

json.teams do
  json.array! user.teams do |team|
    json.extract! team, :id, :name
  end
end

json.team_memberships do
  json.array! user.team_memberships do |tm|
    json.extract! tm, :id, :team_id, :user_id
  end
end
