class AddImageToPostsAndUsers < ActiveRecord::Migration
  def change
    remove_column :posts, :image
    remove_column :users, :image
    add_attachment :posts, :image
    add_attachment :users, :image
  end
end
