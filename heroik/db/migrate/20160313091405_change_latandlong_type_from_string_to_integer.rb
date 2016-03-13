class ChangeLatandlongTypeFromStringToInteger < ActiveRecord::Migration
  def change
    remove_column :posts, :longitude
    remove_column :posts, :latitude
    remove_column :posts, :google_id
    add_column :posts, :longitude, :integer
    add_column :posts, :latitude, :integer
  end
end
