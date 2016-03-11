class API::PostsController < ApplicationController

  def getsinglepost
    @post = Post.find(params[:post_id])
    respond_to do |format|
      format.json { render 'get_single_post.jbuilder' }
    end
  end
end
