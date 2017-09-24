class ChangeColumnUsersDefaultTeamIdRemoveDefault < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:users, :default_team_id, nil)
  end
end
