# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, presence: true
  scope :recent, -> { order(created_at: :desc).limit(50) }

  after_commit { BroadcastMessageJob.perform_later(self, self.channel) }

  belongs_to :user
  belongs_to :channel

end
