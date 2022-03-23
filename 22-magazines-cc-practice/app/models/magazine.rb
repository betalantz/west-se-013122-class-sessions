class Magazine < ActiveRecord::Base

    def self.most_popular
        # self.all.max{|a, b| a.subscriptions.length <=> b.subscriptions.length}
        self.all.max_by{|mag| mag.subscriptions.length}
    end

    has_many :subscriptions
    has_many :readers, through: :subscriptions

    def email_list
        self.readers.pluck(:email).join(';')
    end
  
end