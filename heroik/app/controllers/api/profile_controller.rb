class API::ProfileController < ApplicationController
  before_action :authenticate_current_user, only: [:getprofileinfo]
  def getprofileinfo
    @posts = current_user.posts.order(created_at: :desc)
    respond_to do |format|
      format.json { render 'get_profile_info.jbuilder' }
    end
  end
end
