class UserSerializer < ActiveModel::Serializer
  attributes :id, :profile_picture, :name, :username, :bio, :unique_followers, :unique_followings, :received_messages

  has_many :posts
  has_many :likes
  has_many :comments
  has_many :direct_messages
  has_many :followings
end