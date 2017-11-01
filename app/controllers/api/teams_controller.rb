class Api::TeamsController < ApplicationController
  before_action :require_login, only: %i(create)

  def create
    @team = Team.new(team_params)


    if @team.save
      user_ids = [current_user.id] + params[:team][:user_ids]
      subscribe_user_ids!(user_ids, [@team, *@team.channels])

      set_as_default!
      render :show
    else
      @errors = [@team.errors.messages]
      render partial: 'api/shared/errors.json.jbuilder',
        status: 400
    end
  end

  def invite
    @team = Team.find(params[:id])
    user_ids = params[:team][:user_ids]
    subscribe_user_ids!(user_ids, [@team, @team.general_channel, @team.random_channel])
    if @team.errors.full_messages.empty?
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
