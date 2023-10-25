class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.bigint :channel_id, null: false, foreign_key: true
      t.bigint :user_id, foreign_key: true
      t.text :content, null: false
      t.bigint :reply_to
      t.boolean :is_question, null: false

      t.timestamps
    end
  end
end
