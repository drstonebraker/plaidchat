class Api::UsersController < ApplicationController
  before_action :require_login, only: %i(destroy update search)
  before_action :require_logout, only: %i(create)
  before_action :require_current_user, only: %i(destroy update)

  def create
    @user = user_params[:is_demo] ? User.new_demo_user : User.new(user_params)
    
    if @user.save
      subscribe_existing_channels!
      login!(@user)
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

  def search
    @users = User.where(
        "LOWER(username) LIKE ?",
        "#{params[:query].downcase}%"
      ).
      where.not(id: current_user.id).
      where(is_demo: false).
      order(:username).
      limit(200)

    if params[:team_id]
      @users = @users.includes(:teams).
        where(teams: { id: params[:team_id] })
    end

    render template: 'api/users/search.json.jbuilder'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :default_team_membership_id, :is_demo)
  end

  def subscribe_existing_channels!
    if params[:channel_ids]
      Channel.subscribe_user_ids!([@user.id], Channel.where('id IN (?)', params[:channel_ids]))
    end
  end

end
