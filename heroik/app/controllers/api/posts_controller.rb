class API::PostsController < ApplicationController

  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.json { render 'get_single_post.jbuilder' }
    end
  end
end
