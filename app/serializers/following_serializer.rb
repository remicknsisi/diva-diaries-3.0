class FollowingSerializer < ActiveModel::Serializer
    attributes :id, :follower_id, :followed_user_id
  
    # belongs_to :user
    # belongs_to :post
end