json.array! @comments do |comment|
  json.merge! comment.attributes
  json.user do
    json.partial! '/api/partials/user_show', locals: {user: comment.user}
  end
end