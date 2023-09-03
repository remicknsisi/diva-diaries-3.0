class PostSerializer < ActiveModel::Serializer
  attributes :id, :location, :image, :caption, :user_id, :likes

  belongs_to :user
  has_many :likes
  has_many :comments
end