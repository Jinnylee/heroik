class ProfileController < ApplicationController

  def profile
    @posts = Post.where(user_id: params[:user_id]).order(created_at: :desc)

    if
  end

end
