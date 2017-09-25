# == Schema Information
#
# Table name: team_memberships
#
#  id                 :integer          not null, primary key
#  team_id            :integer          not null
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  default_channel_id :integer          not null
#

class TeamMembership < ApplicationRecord
  validates :user_id, uniqueness: { scope: :team_id,
    message: 'can only subscribe once to each team'}

  before_validation create_default_channel!

  belongs_to :user
  belongs_to :team
  belongs_to :default_channel,
    class_name: :Channel

  has_many :users_as_default,
    primary_key: :id,
    foreign_key: :default_team_membership_id

  def write_default_channel
    self.default_channel = self.team.general_channel
  end

  def create_default_channel
    write_default_channel
    self.save
  end

  def create_default_channel!
    write_default_channel
    self.save!
  end

end
