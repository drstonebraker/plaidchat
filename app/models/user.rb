# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  username                   :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  default_team_membership_id :integer          not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validate :valid_username
  validate :strong_password

  attr_reader :password
  after_initialize :ensure_session_token!
  after_initialize :create_standard_teams!, :create_standard_channel_memberships, unless: :persisted?
  before_validation :set_default_team_membership

  ######################
  #  associations
  ######################

  has_many :team_memberships
  has_many :teams,
    through: :team_memberships,
    source: :team

  has_many :channel_memberships
  has_many :channels,
    through: :channel_memberships,
    source: :channel

  belongs_to :default_team_membership,
    primary_key: :id,
    foreign_key: :default_team_membership_id,
    class_name: :TeamMembership,
    optional: true

  has_one :default_team,
    through: :default_team_membership,
    source: :team

  has_one :default_team_default_channel,
    through: :default_team_membership,
    source: :default_channel

  ######################
  # custom validations
  ######################

  def strong_password
    unless strong_password?
      errors.add(:password, "can't be things like _password_, " \
        "_123456_, or _abcdef_")
    end
  end

  def strong_password?
    @password ||= ''
    if ('a'..'z').to_a.
      concat((0..9).to_a).
      include?(@password.downcase) ||
        @password.downcase.include?('password')

      return false
    end
    true
  end

  def valid_username
    unless valid_username?
      errors.add(:username, "must contain only letters, numbers, " \
        "periods, hyphens, and underscores")
    end
  end

  def valid_username?
    return false if self.username =~ /[^a-zA-Z0-9\.\-\_]/
    true
  end

  ######################
  # auth methods
  ######################

  def self.find_by_credentials(username, password)
    user = self.includes(:teams, :team_memberships).
      find_by(username: username)
    return nil unless user
    user.valid_password?(password) ? user : nil
  end

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom.urlsafe_base64
    end
    token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token!
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  ######################
  # association methods
  ######################

  def write_standard_teams
    global_team = Team.global_team
    demo_team = Team.new(name: 'Demo')
    self.teams << [demo_team, global_team]
    self.channels << [demo_team.channels, global_team.channels]
  end

  def set_default_team_membership(team_id = Team.global_team.id)
    self.default_team_membership = self.team_memberships.find_by(
      team_id: team_id
    )
  end

  def create_standard_teams
    write_standard_teams
    self.save
  end

  def create_standard_teams!
    write_standard_teams
    self.save!
  end

  def create_standard_channel_memberships
    debugger
  end

  private

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
