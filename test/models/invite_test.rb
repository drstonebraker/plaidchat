# == Schema Information
#
# Table name: invites
#
#  id         :integer          not null, primary key
#  token      :string           not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class InviteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
