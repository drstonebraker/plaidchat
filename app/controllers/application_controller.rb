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
    session[:session_token] = nil
  end

  def require_login
    render json: [{error: 'You must be logged in'}], status: 401 unless logged_in?
  end

  def require_logout
    render json: ['You cannot create a new session when already logged in'],
      status: 401 if logged_in?
  end

  def require_current_user
    unless current_user.session_token == session[:session_token]
      render json: [
        {error: "You do not have permission to edit this user's information"}
      ], status: 401
    end
  end

  # def subscribe_current_user!(association, chatgroup)
  #   unless current_user.send(association).include?(chatgroup)
  #     current_user.send(association) << chatgroup
  #   end
  # end
  #
  # def subscribe_user_ids!(new_user_ids, channels)
  #   channels.each do |chatgroup|
  #     uniq_ids = chatgroup.user_ids.concat(new_user_ids).uniq
  #     chatgroup.user_ids = uniq_ids
  #   end
  # end

end
