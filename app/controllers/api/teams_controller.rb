class Api::TeamsController < ApplicationController
  before_action :require_login, only: %i(create)

  def create
    @team = Team.new(team_params)

    if @team.save
      set_default_team!(@team)
      create_team_membership_and_default_channels!(@team)

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

  def create_memberships_and_default_channels!(*teams)
    teams.each do |team|
      general_channel = Channel.create!(
        name: 'general',
        team_id: team.id,
      )

      random_channel = Channel.create!(
        name: 'random',
        team_id: team.id,
      )

      create_channel_membership!(general_channel.id, random_channel.id)

      create_team_membership!(team)
    end
  end

end
