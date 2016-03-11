class AddVoteColumnToPostTable < ActiveRecord::Migration
  def change
    add_column :posts, :post_votes, :integer
  end
end
