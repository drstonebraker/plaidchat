class Api::TeamMembershipsController < ApplicationController
  before_action :require_login, only: %i(update)

  def update
    @team_membership = TeamMembership.find(params[:id])

    if @team_membership.update(team_membership_params)
      render :show
    else
      @errors = [@team_membership.errors.messages]
      render partial: 'api/shared/errors.json.jbuilder',
        status: 400
    end
  end

  private

  def team_membership_params
    params.require(:team_membership).permit(:default_channel_id)
  end

end
