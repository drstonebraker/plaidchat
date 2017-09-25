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

  belongs_to :user
  belongs_to :team
  belongs_to :default_channel,
    class_name: :Channel

  has_many :users_as_default,
    primary_key: :id,
    foriegn_key: :default_team_membership_id

end
