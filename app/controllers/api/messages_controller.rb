class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where(channel_id: params[:channel_id])
  end

  def create
    
  end

  def update
  end

  def destroy
  end

  private

  def message_params
    params.require(:message).permit(:body, :channel_id)
  end

end
