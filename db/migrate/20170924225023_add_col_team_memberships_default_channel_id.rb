class AddColTeamMembershipsDefaultChannelId < ActiveRecord::Migration[5.1]
  def change
    add_column :team_memberships, :default_channel_id, :integer, null: false
  end
end
