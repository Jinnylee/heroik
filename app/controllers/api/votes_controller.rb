class API::VotesController < ApplicationController
  before_action :authenticate_current_user
  def update
    @new_vote = Vote.create(user_id:current_user.id, post_id:params[:post_id], votes:1)
    @count_vote = Vote.where(post_id: params[:post_id]).count
    @post = Post.update(params[:post_id], post_votes: @count_vote)
    respond_to do |format|
      if @post.errors.messages.blank?
        format.json { render json: @count_vote }
      else
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end
end
