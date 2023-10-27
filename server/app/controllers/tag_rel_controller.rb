class TagRelController < ApplicationController
  def create
    @tag_rel = ChannelTagRel.new(
      channel_id: params[:channel_id],
      tag_id: params[:tag_id]
    )
    
    if @tag_rel.save
      render json: { status: 201 }
    else
      render json: { status: 422 }
    end
  end
end
