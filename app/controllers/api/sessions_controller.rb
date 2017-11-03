class Api::SessionsController < ApplicationController
  before_action :require_login, only: %i(destroy)
  before_action :require_logout, only: %i(create)

  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )

    if @user
      handle_demo_transfer if current_user # demo user logging in to permanent acct

      login!(@user)
      render :show
    else
      @errors = [ { general: ['Invalid username or password'] } ]
      render partial: 'api/shared/errors.json.jbuilder',
        status: 400
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
