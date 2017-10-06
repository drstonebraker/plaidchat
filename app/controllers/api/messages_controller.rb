class Api::MessagesController < ApplicationController
  before_action :require_login, only: %i(create update destroy)
  # before_action :require_ownership, only: %i(update destroy)

  def index
    @messages = Message.where(channel_id: params[:channel_id])
  end

  def create
    @message = current_user.write_message(message_params)

    unless @message.save
      @errors = [@message.errors.messages]
      render partial: 'api/shared/errors.json.jbuilder',
        status: 400
    end

  end

  def update
  end

  def destroy
  end

  private

  def message_params
    params.require(:message).permit(:body, :channel_id)
  end

  def require_ownership

  end

end
