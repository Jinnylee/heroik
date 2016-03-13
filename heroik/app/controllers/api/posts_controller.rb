class API::PostsController < ApplicationController

  def index
    @posts = Post.all
    respond_to do |format|
      format.json { render 'index.jbuilder' }
    end
  end

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
          # format.json { render 'profile.jbuilder' }
        else
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      end
  end

  def update
    @post = Post.update(params[:id], editedpost_params)
    respond_to do |format|
      if @post.save
        format.json { render json: @post }
      else
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    Post.destroy(params[:id])
    respond_to do |format|
      # format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def community
    @posts = Post.where(category: 'Community')
    respond_to do |format|
      format.json { render 'index.jbuilder' }
    end
  end

  def youth
    @posts = Post.where(category: 'Youth')
    respond_to do |format|
      format.json { render 'index.jbuilder' }
    end
  end

  def environment
    @posts = Post.where(category: 'Environment')
    respond_to do |format|
      format.json { render 'index.jbuilder' }
    end
  end

  def animals
    @posts = Post.where(category: 'Animals')
    respond_to do |format|
      format.json { render 'index.jbuilder' }
    end
  end

  def good_deeds
    @posts = Post.where(category: 'Good deeds')
    respond_to do |format|
      format.json { render 'index.jbuilder' }
    end
  end

  private
    def post_params
      params.require(:post).permit(:title, :image, :category, :location, :description, :user_id, :post_votes)
    end

    def editedpost_params
      params.require(:editedpost).permit(:title, :image, :category, :location, :description)
    end


end
