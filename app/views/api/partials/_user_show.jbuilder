json.extract! user, :name, :nickname, :email, :first_name, :last_name, :username, :quote, :created_at, :id
json.image user.image.nil? ? user.avatar.url : user.image
