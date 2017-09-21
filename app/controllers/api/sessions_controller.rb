class Api::SessionsController < ApplicationController
  before_action :require_login, only: %i(destroy)
  before_action :require_logout, only: %i(create)

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login!(@user)
      render :show
    else
      render json: [{errors: 'Invalid username or password'}], status: 400
    end
  end

  def destroy
    logout!
    render json: {}
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
