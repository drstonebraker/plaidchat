class AddColUsersIsBot < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :is_bot, :boolean, null: false, default: false
  end
end
