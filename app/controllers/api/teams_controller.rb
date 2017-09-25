class Api::TeamsController < ApplicationController
  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)

    if @team.save
      set_default_team!(@team)
      create_membership_and_default_channels!(@team)

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

  def create_membership_and_default_channels!(*teams)
    teams.each do |team|
      general_channel = Channel.create!(
        name: 'general',
        team_id: team.id,
      )

      Channel.create!(
        name: 'random',
        team_id: team.id,
      )

      create_team_membership!(team)
    end
  end

end
