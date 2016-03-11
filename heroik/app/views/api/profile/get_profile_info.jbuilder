json.user do
  json.partial! 'api/partials/user_show', locals: {user: @current_user}
end

json.posts do
  json.array! @posts do |post|
    json.partial! 'api/partials/post_show', locals: {post: post}
  end
end
