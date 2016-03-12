class API::PostsController < ApplicationController

  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.json { render 'get_single_post.jbuilder' }
    end
  end

  def create
    post = Post.new(params[:post])
    if post.save!
      render json: { status: 200 }
    else
      render json: { status: 400 }
    end
  end


  # def update
  #   Post.update(params[:id])
  # end

  # def destroy
  #   Post.delete(params[:id])
  # end



  # private
  #   def post_params
  #     params.require(:post).permit(:title, :category, :address, :description)
  #   end


end
