json.merge! post.attributes
json.username post.user.username
json.user_id post.user.id
json.current_user_voted current_user.votes.where(post_id:post.id).count