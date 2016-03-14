class API::QuotesController < ApplicationController
  def index
    @quote = Quote.order("RANDOM()").first
    respond_to do |format|
      format.json { render json: @quote}
    end
  end
end
