puts "Making actors..."

5.times {
    Actor.create(first_name: Faker::Name.unique.first_name, last_name: Faker::Name.unique.last_name)
}

puts "Making networks..."
NETWORKS = ["HBO", "Showtime", "AmazonPrime", "Appl+", "Netflix"]
NETWORKS.each {|net|
    Network.create(call_letters: net, channel: Faker::Number.number(digits: 3))
}

puts "Making shows..."
DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
SEASONS = ["S1", "S2", "S3", "S4", "S5"]
GENRES = ["rom-com", "reality", "horror", "sf", "documentary"]

8.times {
    Show.create(name: Faker::Movie.unique.title, day: DAYS.sample, season: SEASONS.sample, genre: GENRES.sample, network: Network.all.sample )
}

puts "Making characters..."
10.times {
    Character.create(name: Faker::TvShows::BojackHorseman.character, actor: Actor.all.sample, show_id: Show.ids.sample, catchphrase: Faker::TvShows::BojackHorseman.quote)
}

puts "Seeds done!"