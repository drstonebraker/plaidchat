json.team do
  json.extract! team, :id, :name
end

json.team_memberships do
  json.array! team.team_memberships do |tm|
    json.extract! tm, :id, :team_id, :user_id
  end
end
