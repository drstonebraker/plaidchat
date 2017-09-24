class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.boolean :is_direct_message, null: false, default: false
      t.integer :team_id, null: false

      t.timestamps
    end
    add_index :channels, [:team_id, :name], unique: true
  end
end
