class API::UsersController < ApplicationController
  before_action :authenticate_current_user, only: [:profile, :edit]

  def profile
    @posts = current_user.posts.order(created_at: :desc)
    respond_to do |format|
      format.json { render 'profile.jbuilder' }
    end
  end

  def update
    @user_info = User.update(current_user.id, user_params)
    respond_to do |format|
      format.json { render json: @user_info }
    end
  end

  # def index
  #   @posts = Post.all
  #   respond_to do |format|
  #     format.json { render 'profile.jbuilder' }
  #   end
  # end
  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :name, :image, :quote)
  end

end
