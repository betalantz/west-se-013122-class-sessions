class Company < ActiveRecord::Base

    def self.oldest_company
        # self.all.min_by{|company| company.founding_year}
        # self.all.min_by(&:founding_year) # Ruby method min_by
        self.order(:founding_year).first # use AR methods
    end

    has_many :freebies
    has_many :devs, through: :freebies

    def give_freebie(dev, item_name, value)
        # Freebie.create(item_name: item_name, value: value, dev: dev, company: self)
        self.freebies.create(item_name: item_name, value: value, dev: dev)
    end

end
