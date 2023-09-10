class DirectMessageSerializer < ActiveModel::Serializer
    attributes :id, :sender_id, :recipient_id, :content
  
    belongs_to :user
    # belongs_to :post
end