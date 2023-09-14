class AddUserIsToDMs < ActiveRecord::Migration[6.1]
  def change
    add_column :direct_messages, :user_id, :integer
  end
end
