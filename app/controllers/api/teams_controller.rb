class Api::TeamsController < ApplicationController
  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)
    # create membership for creator
    @team.user_ids = current_user.id

    # TODO: create standard channels

    if @team.save
      # set as default team
      current_user.update!(default_team_id: @team.id)
      render :show
    else
      @errors = [@team.errors.messages]
      render partial: 'api/shared/errors.json.jbuilder',
        status: 400
    end
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end

end
