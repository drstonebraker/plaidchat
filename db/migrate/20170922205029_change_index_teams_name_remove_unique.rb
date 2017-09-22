class ChangeIndexTeamsNameRemoveUnique < ActiveRecord::Migration[5.1]
  def change
    remove_index :teams, :name
    add_index :teams, :name
  end
end
