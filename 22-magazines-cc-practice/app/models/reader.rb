class Reader < ActiveRecord::Base

    has_many :subscriptions
    has_many :magazines, through: :subscriptions
  
end