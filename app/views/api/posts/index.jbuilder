json.array! @posts do |post|
  json.partial! 'api/partials/post_show', locals: {post: post, user: @current_user}
end