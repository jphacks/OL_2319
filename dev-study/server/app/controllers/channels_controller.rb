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

  # def get_all
  #   @channels = Channel.all
  #   render json: { channels: @channels }, status: 200
  # end

  # def get_all
  #   @channels = Channel.includes(:channel_tag_rels).all
  #   render json: { channels: @channels }, status: 200
  # end

  def get_all
    @channels = Channel.all.includes(:tags)
    
    response_data = @channels.map do |channel|
      {
        id: channel.id,
        name: channel.name,
        owner_id: channel.owner_id,
        is_anonymous: channel.is_anonymous,
        tags: channel.tags.pluck(:name) # タグ名のリストを取得
      }
    end
  
    render json: { channels: response_data }, status: 200
  end
  

  def get_by_tag
    keyword = params[:tag_name]
    channels = Channel
      .joins("INNER JOIN channel_tag_rels ON channels.id = channel_tag_rels.channel_id")
      .joins("INNER JOIN tags ON channel_tag_rels.tag_id = tags.id")
      .select("channels.*")
      .where("tags.name ILIKE ?", keyword)
    render json: { channels: channels }, status: 200
  end
end