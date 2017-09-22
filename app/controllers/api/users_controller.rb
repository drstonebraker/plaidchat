class Api::UsersController < ApplicationController
  before_action :require_login, only: %i(destroy)
  before_action :require_logout, only: %i(create)
  # before_action :require_current_user, only: %i(update)

  def create
    @user = User.new(user_params)
    demo_team = Team.find_by(name: 'Demo')
    global_team = Team.find_by(name: 'Global')
    @user.default_team_id = global_team.id

    if @user.save
      @user.team_ids = [demo_team.id, global_team.id]
      login!(@user)
      render :show
    else
      @errors = [@user.errors.messages]
      render partial: 'api/shared/errors.json.jbuilder',
        status: 400
    end
  end

  def update
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
