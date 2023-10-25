class ChannelsController < ApplicationController
  def create
    @channel = Channel.new(name: params[:name], description: params[:description], owner_id: params[:owner_id], is_anonymous: params[:is_anonymous])
    if @channel.save
      render json: { status: 201, owner_id: @channel.owner_id }
    else
      render json: { status: 200 }
    end
  end

  def delete
    channel = Channel.find_by(id: params[:id])
    if channel
      channel.destroy
      render json: { status: 200, channel_id: channel.id }
    else
      render json: { status: 404 }
    end
  end
end
