class ChannelsController < ApplicationController
  def create
    @channel = Channel.new(name: params[:name], description: params[:description], owner_id: params[:owner_id], is_anonymous: params[:is_anonymous])
    if @channel.save
      render json: { owner_id: @channel }, status: 200
    else
      render status: 422
    end
  end

  def delete
    channel = Channel.find_by(id: params[:id])
    if channel
      channel.destroy
      render json: { channel_id: channel }, status: 204
    else
      render status: 404
    end
  end

  def get_all
    @channels = Channel.all
    render json: { channels: @channels }, status: 200
  end

  def get_by_tag
    keyword = params[:tag_name]
    all_channels_with_tags = Channel
      .joins("INNER JOIN channel_tag_rels ON channels.id = channel_tag_rels.channel_id")
      .joins("INNER JOIN tags ON channel_tag_rels.tag_id = tags.id")
      # .select("channels.*, tags.id AS tag_id, tags.name AS tag_name")

    channels = all_channels_with_tags
      .select("DISTINCT channels.id, channels.name, channels.description, channels.is_anonymous")
      .where("tags.name ILIKE ?", keyword)

    render json: { channels: channels }, status: 200
  end
end