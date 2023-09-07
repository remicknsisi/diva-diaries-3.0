class PostSerializer < ActiveModel::Serializer
  attributes :id, :location, :image, :caption, :user_id, :likes, :created_at

  belongs_to :user
  has_many :likes
  has_many :comments
end