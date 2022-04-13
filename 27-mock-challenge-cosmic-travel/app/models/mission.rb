class Mission < ApplicationRecord
  belongs_to :scientist
  belongs_to :planet

  validates :name, presence: true
  validates :scientist, uniqueness: true # is this the right validation?
end
