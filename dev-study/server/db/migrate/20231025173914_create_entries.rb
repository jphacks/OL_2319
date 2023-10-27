class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.bigint :channel_id, null: false, foreign_key: true
      t.bigint :user_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
