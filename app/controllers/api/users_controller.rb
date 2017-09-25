class Api::UsersController < ApplicationController
  before_action :require_login, only: %i(destroy update)
  before_action :require_logout, only: %i(create)
  before_action :require_current_user, only: %i(destroy update)

  def create
    @user = User.new(user_params)
    global_team = Team.find_by(name: 'Global')
    @user.default_team = global_team
    @user.default_team_membership.default_channel =


    if @user.save
      set_default_team_membership(global_team, @user) unless @user.default_team_membership_id
      login!(@user)
      create_team_membership!(demo_team, global_team)
      render :show
    else
      @errors = [@user.errors.messages]
      render partial: 'api/shared/errors.json.jbuilder',
        status: 400
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      @errors = [@user.errors.messages]
      render partial: 'api/shared/errors.json.jbuilder',
        status: 400
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :default_team_membership_id)
  end

end
