class Role < ActiveRecord::Base

    has_many :auditions

    def actors
        self.auditions.map{|audition| audition.actor}
        # self.auditions.map(&:actor)
        # self.auditions.pluck(:actor)
    end

    def locations
        self.auditions.pluck(:location)
        # auditions.pluck(:location) # Ruby will supply implicit self
    end

    def lead
         # returns first instance of audition hired for this role OR 'no actor hired...'
         #  lead = self.auditions.find{|audition| audition.hired } # AR method + Ruby method
         lead = self.auditions.find_by(hired: true) # all AR methods
         lead ? lead : "No actor has been hired for this role."
        end
        
        def understudy
            # returns second instance of audition hired for this role OR 'no actor hired...'
            # hireds = self.auditions.filter{|aud| aud.hired} # Ruby's .filter will return a new array of select elements
            # hireds = Audition.where(hired: true, role: self) # AR's .where also returns and array and can match multiple conditions
            # understudy = hireds[1] # just grabbing the second element of the filtered array
            understudy = self.auditions.where(hired: true).second # uses all AR methods
            understudy ? understudy : "No actor has been hired as understudy for this role."
    end

end