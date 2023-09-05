class Like < ApplicationRecord
    belongs_to :user
    belongs_to :post

    # validate :like_exists

    # def like_exists
    #     likes = Like.all
    #     result = likes.find{|l| l.user_id == self.user_id && l.post_id == self.post_id}
    #     if result
    #         errors.add(:user, "has already liked this post")
    #     end
    # end
end