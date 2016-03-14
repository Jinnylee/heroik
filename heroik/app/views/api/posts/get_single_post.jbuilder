json.partial! 'api/partials/post_show', locals: {post: @post}

if current_user && current_user.id == @post.user_id
  json.belongs_to_current_user true
else
  json.belongs_to_current_user false
end