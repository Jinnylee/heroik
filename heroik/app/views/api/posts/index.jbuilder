json.array! @posts do |post|
  json.extract! post, :id, :image, :title, :post_votes, :created_at, :category
end
