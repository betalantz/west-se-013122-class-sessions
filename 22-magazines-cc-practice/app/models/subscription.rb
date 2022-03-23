class Subscription < ActiveRecord::Base

    belongs_to :reader
    belongs_to :magazine
  
end