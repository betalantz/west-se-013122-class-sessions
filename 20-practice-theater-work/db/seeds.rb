puts "Wiping previous data..."
Role.destroy_all
Audition.destroy_all

puts "Resetting Faker gem..."
Faker::Movies::StarWars.unique.clear
Faker::FunnyName.unique.clear


puts "Creating Roles..."
5.times {
    Role.create(character_name: Faker::Movies::StarWars.unique.character)
}

puts "Creating auditions..."
10.times {
    actor = Faker::FunnyName.unique.name
    location = Faker::Address.city
    phone = Faker::Number.number(digits: 10)
    role = Role.all.sample
    Audition.create(actor: actor, location: location, phone: phone, role: role)
}
