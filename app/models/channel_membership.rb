# == Schema Information
#
# Table name: channel_memberships
#
#  id         :integer          not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMembership < ApplicationRecord
  after_save :subscribe_user_to_team!

  belongs_to :channel
  belongs_to :user

  has_one :team,
    through: :channel,
    source: :team

  def subscribe_user_to_team!
    uniq_user_ids = self.team.user_ids.concat(self.user_id).uniq
    self.team.user_ids = uniq_user_ids
  end

end
