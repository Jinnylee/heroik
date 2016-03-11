class ProfileController < ApplicationController

  def profile
  end

  def getprofileinfo
    @posts = Post.where(user_id: 1).order(created_at: :desc)
    @username = User.where(id: 1)
    respond_to do |format|
      format.json { render json: { username: @username, posts: @posts } }
    end
  end

end
