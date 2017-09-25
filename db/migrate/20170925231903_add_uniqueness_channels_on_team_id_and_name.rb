class AddUniquenessChannelsOnTeamIdAndName < ActiveRecord::Migration[5.1]
  def change
    remove_index :channels, [:team_id, :name]
    add_index :channels, [:team_id, :name], unique: true
  end
end
