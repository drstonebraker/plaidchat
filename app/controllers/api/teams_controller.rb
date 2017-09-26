class Api::TeamsController < ApplicationController
  before_action :require_login, only: %i(create)

  def create
    @team = Team.new(team_params)

    if @team.save
      subscribe_current_user!(:teams, @team)
      set_as_default!
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

  def set_as_default!
    current_user.default_team = @team
  end

end
