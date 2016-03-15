class AddImageToPostsAndUsers < ActiveRecord::Migration
  def change
    remove_column :posts, :image
    add_attachment :posts, :image
    add_attachment :users, :avatar
  end
end
