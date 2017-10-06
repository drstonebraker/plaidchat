class BroadcastMessageJob < ApplicationJob
  queue_as :default

  def perform(message, channel)
    # Learned from https://gist.github.com/louisscruz/353429252f6a888262117e3d856ebfc2#file-message-rb
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )

    ActionCable.server.broadcast("channel_#{channel.id}",
                                 message: JSON.parse(message))
  end
end
