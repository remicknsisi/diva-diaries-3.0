class RemoveFollowerIdFromFollowings < ActiveRecord::Migration[6.1]
  def change
    remove_column :followings, :follower_id
  end
end
