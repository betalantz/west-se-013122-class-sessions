class Dev < ActiveRecord::Base

    has_many :freebies
    has_many :companies, through: :freebies

    def received_one?(item_name)
        # item = self.freebies.find_by(item_name: item_name)
        # item ? true : false
        # self.freebies.pluck(:item_name).include?(item_name)
        self.freebies.any? {|f| f.item_name == item_name}
    end

    def give_away(dev, freebie)
        # if self.received_one?(freebie.item_name)
        #     freebie.update(dev: dev)
        #     dev.reload
        #     self.reload
        # else
        #     "You can't give something you don't own!"
        # end
        freebie.update(dev: dev) unless freebie.dev != self
    end

end