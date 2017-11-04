class CreateInvites < ActiveRecord::Migration[5.1]
  def change
    create_table :invites do |t|
      t.string :token, null: false
      t.integer :channel_id, null: false

      t.timestamps
    end
    add_index :invites, :token, unique: true
    add_index :invites, :channel_id
  end
end
