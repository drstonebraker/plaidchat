json.extract! user, :id, :username

json.extract! user, :default_team_id if user == current_user
