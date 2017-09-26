# == Schema Information
#
# Table name: channels
#
#  id                :integer          not null, primary key
#  name              :string           not null
#  team_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  is_direct_message :boolean          default(FALSE)
#

class Channel < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: { scope: :team_id,
    message: 'cannot be the same as another channel on this team' }
  validate :valid_name

  after_save :subscribe_current_user!, :set_as_default!

  ######################
  #  associations
  #####################

  belongs_to :team
  has_many :team_memberships_as_default,
    primary_key: :id,
    foreign_key: :default_channel_id,
    class_name: :TeamMembership

  has_many :channel_memberships,
    dependent: :destroy

  ######################
  # custom validations
  #####################

  def valid_name
    unless valid_name?
      errors.add(:name, "must be lowercase, without spaces or periods," \
        " and shorter than 22 Characters.")
    end
  end

  def valid_name?
    return false if self.name =~ /[A-Z\s\.]/
    return false if self.name.length >= 22
    true
  end

  ######################
  # association methods
  #####################

  def subscribe_current_user!
    current_user.channels << self
  end

  def set_as_default!
    current_user.default_team_default_channel = self
  end

end
