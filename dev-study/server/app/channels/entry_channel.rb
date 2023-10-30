class EntryChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_#{params[:channel_id]}"
    # エントリーの情報を作成
    entry = Entry.new(channel_id: params[:channel_id], user_id: params[:user_id], entry_at: DateTime.now)
    if entry.save
      # エントリーを通知
      entry_id = entry.id
      ActionCable.server.broadcast("channel_#{params[:channel_id]}", "entry");
    end
  end

  def unsubscribed
    @entry = Entry.where(user_id: params[:user_id], channel_id: params[:channel_id]).update_all(exit_at: DateTime.now)
    ActionCable.server.broadcast("channel_#{params[:channel_id]}", "exit");
  end

end
