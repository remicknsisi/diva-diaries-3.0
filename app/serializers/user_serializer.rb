class UserSerializer < ActiveModel::Serializer
  attributes :id, :profile_picture, :name, :username, :bio

  has_many :posts
  has_many :likes
  has_many :comments
  has_many :direct_messages
end