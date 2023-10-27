class ChangeIsDeletedColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :is_deleted, :boolean, null: true
  end
end
