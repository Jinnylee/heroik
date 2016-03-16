json.merge! post.attributes
json.username post.user.username
json.pp post.user.image.nil? ? post.user.avatar.url : post.user.image
json.postpic post.image
json.user_id post.user.id
if user
  json.current_user_voted user.votes.where(post_id:post.id).count
else
  json.current_user_voted 0
end