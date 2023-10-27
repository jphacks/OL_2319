class TagRelController < ApplicationController
  def create
    @channel_tag_rel = ChannelTagRel.new(
      channel_id: params[:channel_id],
      tag_id: params[:tag_id]
    )
    
    if @channel_tag_rel.save
      render json: @channel_tag_rel, status: 200
    else
      render status: 422
    end
  end
end