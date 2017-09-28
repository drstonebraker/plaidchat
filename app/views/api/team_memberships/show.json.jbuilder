json.team_membership do
  json.partial! 'api/team_memberships/team_membership', team_membership: @team_membership
end
