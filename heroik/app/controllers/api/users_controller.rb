class API::UsersController < ApplicationController
  before_action :authenticate_current_user, only: [:profile]
  devise :omniauthable, :omniauth_providers => [:facebook]
  def profile
    @posts = current_user.posts.order(created_at: :desc)
    respond_to do |format|
      format.json { render 'profile.jbuilder' }
    end
  end

  def index
  end

end
