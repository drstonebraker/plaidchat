json.extract! user, :id, :username, :avatar_url

json.extract! user, :default_team_membership_id if user == current_user
