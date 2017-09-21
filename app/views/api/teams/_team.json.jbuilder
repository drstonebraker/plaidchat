json.extract! team, :id, :name
json.team_memberships do
  json.array! team.team_memberships do |tm|
    json.extract! tm, :id, :user_id, :team_id
  end
end
