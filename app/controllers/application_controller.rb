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

  def create_team_membership!(*teams)
    teams.each do |team|
      general_channel = team.channels.find_by(name: 'general')
      TeamMembership.create!(
        team_id: team.id,
        user_id: current_user.id,
        default_channel_id: general_channel.id
      )
    end
  end

  def set_default_team(team, user=current_user)
    user.default_team_id = team.id
  end

  def set_default_team!(team, user=current_user)
    user.update!(default_team_id: team.id)
  end

  def create_channel_membership!(*channels)
    channels.each do |channel|
      current_user.channel_ids += channel.id
    end
  end

end
