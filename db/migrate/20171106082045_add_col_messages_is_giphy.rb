class AddColMessagesIsGiphy < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :is_giphy, :boolean, null: false, default: false
  end
end
