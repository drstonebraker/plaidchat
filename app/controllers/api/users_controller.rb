class Api::UsersController < ApplicationController
  before_action :require_login, only: %i(destroy)
  before_action :require_logout, only: %i(create)
  # before_action :require_current_user, only: %i(update)

  def create
    @user = User.new(user_params)
    if @user.save
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
