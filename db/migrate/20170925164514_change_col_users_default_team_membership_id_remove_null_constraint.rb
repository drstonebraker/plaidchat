class ChangeColUsersDefaultTeamMembershipIdRemoveNullConstraint < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :default_team_membership_id, :integer, null: false
    add_column :users, :default_team_membership_id, :integer
  end
end
