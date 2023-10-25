class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.bigint :owner_id, null: false, foreign_key: true
      t.boolean :is_anonymous, null: false

      t.timestamps
    end
  end
end
