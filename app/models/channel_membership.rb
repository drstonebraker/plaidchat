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

  belongs_to :channel
  belongs_to :user
  
end
