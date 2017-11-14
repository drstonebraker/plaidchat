class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    @current_user = nil
    session[:session_token] = nil
  end

  def require_login
    unless logged_in? || demo_user_creation?
      render json: [{error: 'You must be logged in'}], status: 401
    end
  end

  def require_logout
    if logged_in? && !current_user.is_demo
      render json: ['You cannot create a new session when already logged in'],
        status: 401
    end
  end

  def demo_user_creation?
    params[:user].try(:[], :is_demo)
  end

  def handle_demo_transfer
    demo_user = current_user
    current_user.copy_messages_to(@user)
    current_user.copy_channels_to(@user)
    current_user.copy_defaults_to!(@user)
    logout!
    demo_user.destroy!
    @user.reload
  end

end
