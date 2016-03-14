class API::MapsController < ApplicationController

  def index
    @posts = Post.last(20)
    respond_to do |format|
      format.json { render json: @posts.as_json(include: :user) }
    end
  end

end
