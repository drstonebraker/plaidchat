class ChannelsController < ApplicationController
  before_action :require_login, only: %i(create)

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      create_channel_membership!(@channel)
      set_default_channel!(@channel)

      render :show
    else
      @errors = [@channel.errors.messages]
      render partial: 'api/shared/errors.json.jbuilder',
        status: 400
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :is_direct_message, :team_id)
  end

  def set_default_channel!(channel_id)
    channel_id = channel_id.id if channel_id.is_a?(Channel)
    current_team_membership = user.team_memberships.find_by(
      team_id: params[:team_id]
    )
    current_team_membership.update!(default_channel_id: channel_id)
  end

end
