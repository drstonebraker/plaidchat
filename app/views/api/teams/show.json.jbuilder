json.team do
  json.partial! 'api/teams/team', team: @team
end

json.team_membership do
  json.partial! 'api/team_memberships/team_membership',
    t_m: current_user.find_membership_by_entity(team: @team)
end

# alternatively:
# json.team_memberships @team.team_memberships,
#   partial: 'api/team_memberships/team_membership',
#   as: :tm
