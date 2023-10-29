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
      @chat.content = generate_random_nyan_phrase
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

  def generate_random_nyan_phrase
    nyan_prefix = 'にゃ'
    nyan_elements = ['にゃん', 'にゃ', 'にゃあ〜〜〜〜', '!', '?']
    random_nyan_phrase = nyan_prefix
  
    # ランダムな長さの猫語を生成
    phrase_length = rand(5..15)
    phrase_length.times do
      random_element = nyan_elements.sample
      random_nyan_phrase << random_element
    end
  
    return random_nyan_phrase
  end
    
end