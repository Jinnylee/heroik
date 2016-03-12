class API::PostsController < ApplicationController

  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.json { render 'get_single_post.jbuilder' }
    end
  end

  def create
    @post = Post.new(post_params)
      respond_to do |format|
        if @post.save
          format.json { render json: @post }
        else
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      end
  end


  def update
    @post = Post.update(params[:id])
    respond_to do |format|
        if @post.save
          format.json { render json: @post }
        else
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      end
  end

  # def destroy
  #   Post.delete(params[:id])
  # end



  private
    def post_params
      params.require(:post).permit(:title, :image, :category, :location, :description, :user_id, :post_votes)
    end


end
