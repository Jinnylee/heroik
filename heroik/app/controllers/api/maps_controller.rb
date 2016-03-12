class MapsController < ApplicationController

  def index
    @posts = Post.last(10)
    respond_to do |format|
      format.json { render json: @posts }
    end
  end

end
