class CreateChannelTagRels < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_tag_rels do |t|
      t.bigint :channel_id, null: false, foreign_key: true
      t.bigint :tag_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end