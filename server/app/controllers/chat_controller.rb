class ChatController < ApplicationController
  def create
    @chat = Chat.new(
      channel_id: params[:channel_id],
      user_id: params[:user_id],
      content: params[:content],
      reply_to: params[:reply_to],
      is_question: params[:is_question]
    )
    
    if @chat.save
      render json: { status: 201 }
    else
      render json: { status: 200 }
    end
  end
end
