json.team do
  json.partial! 'api/teams/team', team: @team
end

json.team_memberships do
  json.array! @team.team_memberships do |tm|
    json.partial! 'api/team_memberships/team_membership', tm: tm
  end
end

# alternatively:
# json.team_memberships @team.team_memberships,
#   partial: 'api/team_memberships/team_membership',
#   as: :tm
