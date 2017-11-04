class InvitesController < ApplicationController
  before_action :require_channel_membership, only: %i(create)

  def create
    @invite = Invite.new(invite_params)

    if @invite.save
      render :show
    else
      @errors = [@invite.errors.messages]
      render partial: 'api/shared/errors.json.jbuilder',
        status: 400
    end

  end

  def consume
    @invite = Invite.find_by(token: params[:invite_token])

    if logged_in?
      @user = User.new_demo_user!
      login!(@user)
    else
      @user = current_user
    end
    debugger
    Channel.subscribe_user_ids!(
      [@user.id],
      [@invite.channel, @invite.team.general_channel, @invite.team.random_channel]
    )

    # set default team membership
    # set default channel membership

    @invite.destroy!
    redirect_to root_url
  end

  private

  def require_channel_membership
    unless current_user.channel_ids.include?(invite_params[:channel_id])
      render json: [
        {error: "You do not have permission to create invites for that channel"}
      ], status: 401
    end
  end

  def invite_params
    params.require(:invite).permit(:channel_id)
  end

end
