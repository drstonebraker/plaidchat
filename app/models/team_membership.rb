# == Schema Information
#
# Table name: team_memberships
#
#  id         :integer          not null, primary key
#  team_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TeamMembership < ApplicationRecord
  validates :user_id, uniqueness: { scope: :team_id,
    message: 'can only subscribe once to each team'}

  belongs_to :user
  belongs_to :team

end
