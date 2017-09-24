# == Schema Information
#
# Table name: channels
#
#  id                :integer          not null, primary key
#  name              :string           not null
#  is_direct_message :boolean          default(FALSE), not null
#  team_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, :is_direct_message, presence: true
  validates :name, uniqueness: { scope: :team_id,
    message: 'cannot have the same name as another channel on this team' }

  belongs_to :team

end
