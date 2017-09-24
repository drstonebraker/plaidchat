class Api::TeamsController < ApplicationController
  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)

    if @team.save
      create_membership(@team)
      set_default_team(@team)
      create_default_channels(@team)

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

  def create_default_channels(team)
    general_channel = Channel.create!(
      name: 'general',
      team_id: team.id,
    )

    Channel.create!(
      name: 'random',
      team_id: team.id,
    )

    TeamMembership.create!(
      team_id: team.id,
      user_id: current_user.id,
      default_channel_id: general_channel.id
    )
  end

  def create_membership(team)
    team.user_ids = [current_user.id]
  end

  def set_default_team(team)
    current_user.update!(default_team_id: team.id)
  end

end
