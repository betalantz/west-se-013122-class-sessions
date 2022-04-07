class Gym < ApplicationRecord

    has_many :memberships, dependent: :destroy
    has_many :clients, through: :memberships

    validates :name, :address, presence: true
end
