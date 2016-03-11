class UsersController < ApplicationController
  before_action :authenticate_current_user, only: [:loggedin, :image]

  def create
  end


end
