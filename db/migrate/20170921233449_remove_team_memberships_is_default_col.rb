class RemoveTeamMembershipsIsDefaultCol < ActiveRecord::Migration[5.1]
  def change
    remove_index :team_memberships, name: :index_team_memberships_on_user_id_and_is_default
    remove_column :team_memberships, :is_default, :integer, default: true, null: false
    add_index :team_memberships, [:user_id]
  end
end
