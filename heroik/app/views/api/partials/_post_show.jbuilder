json.merge! post.attributes
json.username post.user.username
json.user_id post.user.id
if user
  json.current_user_voted user.votes.where(post_id:post.id).count
else
  json.current_user_voted 0
end