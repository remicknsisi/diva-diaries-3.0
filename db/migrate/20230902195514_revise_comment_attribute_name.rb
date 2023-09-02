class ReviseCommentAttributeName < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :comment
  end
end
