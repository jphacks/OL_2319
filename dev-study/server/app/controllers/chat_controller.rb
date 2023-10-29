class ChatController < ApplicationController
  def create
    @chat = Chat.new(
      channel_id: params[:channel_id],
      user_id: params[:user_id],
      content: params[:content],
      reply_to: params[:reply_to],
      is_question: params[:is_question]
    )

    # コマンド
    if @chat.content.include?('!cat')
      @chat.content = 'にゃんにゃ〜〜ん！にゃん！にゃあ〜〜〜'
    elsif @chat.content.include?('!goat')
      @chat.content = 'メエェメェェメエェ'
    elsif @chat.content.include?('!hourse')
      @chat.content = 'ヒヒィ〜〜〜〜〜〜ン'
    end

    if @chat.save
      render json: @chat, status: 200
    else
      render status: 200
    end
  end

  # 該当チャンネルのチャット全件取得
  def get_all
    keyword = params[:channel_id]
    chats = Chat
      .joins("INNER JOIN users ON chats.user_id = users.id")
      .select("users.name AS user_name, chats.*")
      .where("chats.channel_id = ?", keyword)
      .order(id: :asc)
    render json: { chats: chats }, status: 200
  end
end