class Api::TeamsController < ApplicationController
  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)
    # create membership for creator
    @team.user_ids = [params[:user_id]]
    # set as default team
    @user = User.find(params[:user_id])
    @user.update!(default_team_id: @team.id)
    
    # TODO: create standard channels

    if @team.save
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
