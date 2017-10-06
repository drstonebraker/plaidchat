class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from params[:channel_name]
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
