json.posts do
  json.array! @posts do |post|
    json.partial! 'api/partials/post_show', locals: {post: post, user: @current_user}
  end
end

json.quotes do
  json.array! @quotes do |quote|
    json.quotation quote.smile
    json.id quote.id
  end
end
