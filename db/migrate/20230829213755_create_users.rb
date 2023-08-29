class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :profile_picture
      t.string :name
      t.string :username
      t.text :bio
      t.string :password_digest
      t.timestamps
    end
  end
end
