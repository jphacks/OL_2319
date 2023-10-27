class CreateUserTagRels < ActiveRecord::Migration[5.2]
  def change
    create_table :user_tag_rels do |t|
      t.bigint :user_id, null: false, foreign_key: true
      t.bigint :tag_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
