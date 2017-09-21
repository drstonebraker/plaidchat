class AddDefaultValueToTeamMembershipsIsDefaultCol < ActiveRecord::Migration[5.1]
  def up
    change_column :team_memberships,
      :is_default,
      :boolean,
      null: false,
      default: true
  end
  def down
    change_column :team_memberships,
      :is_default,
      :boolean,
      null: false,
      default: nil
  end
end
