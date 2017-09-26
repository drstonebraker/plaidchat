class RenameColUsersDefaultTeamIdDefaultTeamMembershipId < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :default_team_id, :default_team_membership_id
  end
end
