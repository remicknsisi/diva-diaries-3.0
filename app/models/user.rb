class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :name, presence: true

    has_many :posts
    has_many :likes
    has_many :comments
end