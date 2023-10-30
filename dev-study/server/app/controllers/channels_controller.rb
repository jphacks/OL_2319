class ChannelsController < ApplicationController
  def create
    @channel = Channel.new(name: params[:name], description: params[:description], owner_id: params[:owner_id], is_anonymous: params[:is_anonymous])

    if @channel.save
      render json: @channel , status: 200
    else
      render status: 422
    end
  end

  def create_with_tags
    channel = Channel.find_by(id: params[:channel_id])
    tags_names = params[:tags]

    # 成功フラグを初期化
    success = true

    tags_names.each do |tag_name|
      # タグの新規作成または既存タグの検索
      tag = Tag.find_or_initialize_by(name: tag_name)
      if tag.new_record?
        # タグが新規作成された場合のみ保存
        if tag.save
          # 紐付け
          channel_tag_rel = ChannelTagRel.new(channel_id: channel.id, tag_id: tag.id)
          unless channel_tag_rel.save
            success = false
            break
          end
        else
          success = false
          break
        end
      else
        # 既存のタグが見つかった場合、紐付けのみ行う
        channel_tag_rel = ChannelTagRel.new(channel_id: channel.id, tag_id: tag.id)
        unless channel_tag_rel.save
          success = false
          break
        end
      end
    end

    if success
      render status: 200
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
    @channels = Channel.all.includes(:tags)
    response_data = @channels.map do |channel|
      {
        id: channel.id,
        name: channel.name,
        description: channel.description,
        owner_id: channel.owner_id,
        is_anonymous: channel.is_anonymous,
        tags: channel.tags # タグ名のリストを取得
      }
    end
    render json: { channels: response_data }, status: 200
  end

  def get_by_tag
    keyword = params[:tag_name]
    @channels = Channel.joins(channel_tag_rels: :tag).where("tags.name ILIKE ?", keyword).includes(:tags)
    response_data = @channels.map do |channel|
      {
        id: channel.id,
        name: channel.name,
        description: channel.description,
        owner_id: channel.owner_id,
        is_anonymous: channel.is_anonymous,
        tags: channel.tags # タグ名のリストを取得
      }
    end
    render json: { channels: response_data }, status: 200
  end
end
