class ChangeColUsersDefaultTeamMembershipIdAddNullConstraint < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :default_team_membership_id, :integer
    add_column :users, :default_team_membership_id, :integer, null: false
  end
end
