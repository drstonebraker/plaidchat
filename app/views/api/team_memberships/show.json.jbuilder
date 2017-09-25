json.team_membership do
  json.partial! 'api/team_memberships/team_membership', t_m: @team_membership
end
