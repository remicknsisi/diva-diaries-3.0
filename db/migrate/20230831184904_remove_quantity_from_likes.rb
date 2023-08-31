class RemoveQuantityFromLikes < ActiveRecord::Migration[6.1]
  def change
    remove_column :likes, :quantity
  end
end
