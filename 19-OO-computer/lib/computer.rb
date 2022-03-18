require 'pry'

class Computer

    attr_reader :brand, :model, :storage_free
    attr_accessor :memory_GB

    def initialize(brand, model)
        @brand = brand
        @model = model
        @memory_GB = 8
        @storage_free = 1000
    end

    def set_storage_free=(value)
        self.storage_free= value.clamp(0..1000) # uses private writer #storage_free=
        # @storage_free= value.clamp(0..1000)
    end

    def upgrade_memory(ram)
        self.memory_GB += ram[:size]
    end 

    def disk_full?(file_size)
        @storage_free < file_size
    end

    def save_file(file)
        if disk_full?(file[:size])
            "There is not enough space on disk to save #{file[:name]}."
        else
            self.storage_free -= file[:size]
            "#{file[:name]} has been saved!"
        end
    end
    
    def delete_file(file)
        self.storage_free += file[:size]
        "#{file[:name]} has been deleted!"
    end

    def spec
        "Current memory installed: #{@memory_GB}GB \n current storage free: #{@storage_free}GB"
    end

    private

    attr_writer :storage_free # this is not necessary for the solution, but I wanted to show
                              # this as a use case for attr_writer
    

end

acer = Computer.new("Acer", "THX1138")
acer.upgrade_memory({model: "samsung", size: 8})
puts acer.disk_full?(1100)
puts acer.spec

binding.pry
0