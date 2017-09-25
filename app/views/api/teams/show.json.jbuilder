json.team do
  json.partial! 'api/teams/team', team: @team
end

json.team_memberships do
  json.array! @team.team_memberships do |t_m|
    json.partial! 'api/team_memberships/team_membership', t_m: t_m
  end
end

# alternatively:
# json.team_memberships @team.team_memberships,
#   partial: 'api/team_memberships/team_membership',
#   as: :tm
