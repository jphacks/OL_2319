class ApplicationJob < ActiveJob::Base
  def perform(channel_id)
    ActionCable.server.broadcast("channel_#{channel_id}", "update")
  end
end
