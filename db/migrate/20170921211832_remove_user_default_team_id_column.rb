class RemoveUserDefaultTeamIdColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :default_team_id, :integer, null: false
  end
end
