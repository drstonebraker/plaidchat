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
#  default_team_membership_id :integer
#  is_demo                    :boolean          default(FALSE), not null
#  avatar_url                 :string           not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :avatar_url, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validate :valid_username
  validate :strong_password

  attr_reader :password
  after_initialize :ensure_session_token!
  after_initialize :ensure_avatar_url!
  after_initialize :write_standard_teams, if: :new_record?
  before_validation :set_default_team_membership,
    if: :new_record?

  ######################
  #  associations
  ######################

  has_many :team_memberships,
    dependent: :destroy

  has_many :teams,
    through: :team_memberships,
    source: :team

  has_many :channel_memberships,
    dependent: :destroy

  has_many :channels,
    through: :channel_memberships,
    source: :channel

  belongs_to :default_team_membership,
    primary_key: :id,
    foreign_key: :default_team_membership_id,
    class_name: :TeamMembership

  has_one :default_team,
    through: :default_team_membership,
    source: :team

  has_many :default_team_channels,
    through: :default_team,
    source: :channels

  has_one :default_team_default_channel,
    through: :default_team_membership,
    source: :default_channel

  has_many :messages,
    class_name: :Message

  has_many :default_team_default_channel_messages,
    through: :default_team_default_channel,
    source: :messages

  def default_team_channel_memberships
    self.channel_memberships.joins(:team).where(teams: {id: self.default_team.id})
  end

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
    user = self.includes(
      :teams, :team_memberships, :default_team_channels#, TODO :default_team_default_channel_messages
      ).
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

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
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
    default_team_membership_collection = self.team_memberships.select do |proxy|
      proxy.team_id == team_id
    end

    self.default_team_membership = default_team_membership_collection.first
  end

  def create_standard_teams
    write_standard_teams
    self.save
  end

  def create_standard_teams!
    write_standard_teams
    self.save!
  end

  def find_membership_by_entity(entity)
    entity_type, entity = entity.to_a[0]
    association = "#{entity_type}_memberships".to_sym

    self.send(association).find_by("#{entity_type}_id" => entity.id)
  end

  def write_message(message_params)
    Message.new(
      body: message_params['body'],
      channel_id: message_params['channel_id'],
      user_id: self.id
    )
  end

  ######################
  # other initialization methods
  ######################

  def ensure_avatar_url!
    self.avatar_url ||= self.class.new_avatar_url
  end

  def self.new_avatar_url
    default_image_urls.sample
  end

  def self.default_image_urls
    %w(
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580704/plaid35_wzjcag.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580704/plaid36_gxyj1e.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580704/plaid33_w7rufn.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580704/plaid30_t3sqco.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580704/plaid34_bpbiyk.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580704/plaid32_op6kaf.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580704/plaid31_krvsgy.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580703/plaid23_pck9lp.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580704/plaid28_fdhoc2.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580703/plaid27_htczjy.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580703/plaid25_ftcl9q.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580703/plaid29_k4acvq.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580703/plaid22_c1rtmi.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580703/plaid26_yfiykj.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580703/plaid20_ppr36h.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580703/plaid18_jinzwl.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid21_okhppw.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid13_eztwv7.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid24_sfizfx.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid15_ly8tn1.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid17_mzytj5.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid14_joqula.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid16_nflqgh.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid12_hzp55e.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid11_syiflm.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid10_xkpsfw.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid8_dr1zbm.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580702/plaid9_ovo6mg.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580701/plaid7_w0v8nf.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580701/plaid5_fuyzvk.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580701/plaid6_riduf6.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580701/plaid4_fra7ii.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580701/plaid3_uexymy.png
      http://res.cloudinary.com/dvcr1kq1u/image/upload/v1509580701/plaid1_kpz8p7.png
    )
  end

end
