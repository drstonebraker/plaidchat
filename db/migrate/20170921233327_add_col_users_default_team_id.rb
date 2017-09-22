class AddColUsersDefaultTeamId < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :default_team_id, :integer, null: false, default: 2
  end
end
