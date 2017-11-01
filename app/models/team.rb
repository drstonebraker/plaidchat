# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :name, presence: true
  validate :unique_name

  after_initialize :create_standard_channels, if: :new_record?

  has_many :team_memberships,
    dependent: :destroy
  has_many :channels,
    dependent: :destroy
  has_many :users,
    through: :team_memberships,
    source: :user
  has_many :messages,
    through: :channels,
    source: :messages

  ######################
  # custom validations
  ######################

  def unique_name
    unless unique_name?
      errors.add(:name, "is already taken by another team")
    end
  end

  def unique_name?
    return true if self.name == 'Demo'
    return false if Team.all.
      select(:name).
      where("id <> ?", self.id).
      where("LOWER(name) = ?", self.name.downcase).
      exists?

    true
  end

  ######################
  # association methods
  ######################

  def self.global_team
    @global_team ||= self.find_by(name: 'Global')
  end

  def write_standard_channels
    self.channels.build([{name: 'general'}, {name: 'random'}])
  end

  def create_standard_channels
    write_standard_channels
    self.save
  end

  def create_standard_channels!
    write_standard_channels
    self.save!
  end

  def general_channel
    @general_channel ||= self.channels.find_by(name: 'general')
  end

  def random_channel
    @random_channel ||= self.channels.find_by(name: 'random')
  end

end
