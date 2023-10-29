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
    if @chat.content.match(/^!cat/)
      @chat.content = generate_animal_sound('cat')
    elsif @chat.content.match(/^!goat/)
      @chat.content = generate_animal_sound('goat')
    elsif @chat.content.match(/^!dog/)
      @chat.content = generate_animal_sound('dog')
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

  def generate_animal_sound(animal)
    animal_sounds = {
      'cat' => ['にゃ', 'にゃん', 'にゃ', 'にゃあ〜〜〜〜', '!', '?'],
      'goat' => ['メエェ', 'メェェェ', 'メエェ', '', '?'],
      'dog' => ['ワン', 'ワ〜〜〜ン', 'ワオン', 'ワワ', '!', '?']
    }
  
    nyan_elements = animal_sounds[animal]
    return nil unless nyan_elements
  
    nyan_prefix = nyan_elements.first
    random_nyan_phrase = nyan_prefix
  
    # ランダムな長さの音を生成
    phrase_length = rand(3..15)
    phrase_length.times do
      random_element = nyan_elements.sample
      random_nyan_phrase << random_element
    end
  
    return random_nyan_phrase
  end
    
end