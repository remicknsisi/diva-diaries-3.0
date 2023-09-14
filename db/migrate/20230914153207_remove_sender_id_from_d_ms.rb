class RemoveSenderIdFromDMs < ActiveRecord::Migration[6.1]
  def change
    remove_column :direct_messages, :sender_id
  end
end
