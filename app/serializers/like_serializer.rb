class LikeSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :post_id, :user_id

  belongs_to :user
  belongs_to :post
end