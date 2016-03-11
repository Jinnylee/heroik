class CommentsController < ApplicationController

  # def new
  #   @comment = Comment.new
  # end

  def show
    @comment = Comment.where(post_id: params[:id])
  end

  def create
    @comment = Comment.new(comment_params)

    respond_to do |format|
      if @comment.save
        format.html { redirect_to @comment, notice: 'Comment was successfully created.' }
        format.json { render json: @comment }
      else
        format.html { render :new }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def comment_params
      params.require(:insertComment).permit(:comment, :user_id, :post_id)
    end

end
