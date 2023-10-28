class ChangeEntryAtInEntries < ActiveRecord::Migration[5.2]
  def change
    change_column_null :entries, :entry_at, false
  end
end
