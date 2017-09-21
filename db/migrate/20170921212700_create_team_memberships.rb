class CreateTeamMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :team_memberships do |t|
      t.integer :team_id, null: false
      t.integer :user_id, null: false
      t.boolean :is_default, null: false

      t.timestamps
    end
    add_index :team_memberships, [:team_id, :user_id], unique: true
    add_index :team_memberships, [:user_id, :is_default]
  end
end
