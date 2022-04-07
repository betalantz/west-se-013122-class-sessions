class Membership < ApplicationRecord
  belongs_to :gym
  belongs_to :client

  validates :charge, presence: true
  validates :client, uniqueness: {scope: :gym}
end
