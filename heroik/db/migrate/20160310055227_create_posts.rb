class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string  :title
      t.string  :image
      t.text    :description
      t.string  :category
      t.string  :location
      t.string  :longitude
      t.string  :latitude
      t.string  :google_id
      t.integer :user_id


      t.timestamps null: false
    end
  end
end
