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

  has_many :team_memberships
  has_many :channels
  has_many :users,
    through: :team_memberships,
    source: :user

  def unique_name
    unless unique_name?
      errors.add(:name, "is already taken by another team")
    end
  end

  def unique_name?
    return true if self.name == 'Demo'
    return false if Team.all.
      select(:name).
      where("LOWER(name) = ?", self.name.downcase).
      exists?

    true
  end

end
