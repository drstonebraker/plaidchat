class ChangeColChannelIsDirectMessageRemoveNullConstraint < ActiveRecord::Migration[5.1]
  def change
    remove_column :channels, :is_direct_message, :boolean, default: false, null: false
    add_column :channels, :is_direct_message, :boolean, default: false
  end
end
