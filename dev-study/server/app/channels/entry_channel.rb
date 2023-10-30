class EntryChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_#{params[:channel_id]}"
    # エントリーの情報を作成
    entry = Entry.new(channel_id: params[:channel_id], user_id: current_user.id, entry_at: DateTime.now)
    if entry.save
      # エントリーの情報をブロードキャスト
      ActionCable.server.broadcast("channel_#{params[:channel_id]}", "entry");
    end
  end

  def unsubscribed
    @entry = Entry.find(params[:id])
    @entry.exit_at = DateTime.now
    if @entry.save
      ActionCable.server.broadcast("channel_#{params[:channel_id]}", "exit");
  end
end
