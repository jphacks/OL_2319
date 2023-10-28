class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.references :channel, foreign_key: true
      t.references :user, foreign_key: true
      t.datetime :entry_at
      t.datetime :exit_at

      t.timestamps
    end
  end
end
