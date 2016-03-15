class API::CommentsController < ApplicationController

  def index
    @comments = Comment.where(post_id: params[:post_id]).order("created_at DESC")
    respond_to do |format|
      format.json { render json: @comments.as_json(include: :user) }
    end
  end

  def create
    @comment = Comment.new(comment_params)

    respond_to do |format|
      if @comment.save
         # format.json { render json: @comment }
        format.json { render json: @comment.as_json(include: :user) }
      else
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    Comment.destroy(params[:id])
    respond_to do |format|
      # format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def comment_params
      params.require(:newComment).permit(:comment, :post_id, :user_id)
    end

end