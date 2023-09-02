require 'faker'

puts "🌱 Seeding data..."

User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/fd/SharonNeedlesS4CastMug.jpg/revision/latest?cb=20210901183314",
    name: "Sharon Needles",
    username: "sharonneedlespgh",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ea/ChadMichaelsS4CastMug.jpg/revision/latest?cb=20210901182655",
    name: "Chad Michaels",
    username: "chadmichaelsallstar",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/46/PhiPhiO%27HaraS4CastMug.jpg/revision/latest?cb=20210901183241",
    name: "Phi Phi O'Hara",
    username: "phiphiphiphi",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7a/LatriceRoyaleS4CastMug.jpg/revision/latest?cb=20210901184848",
    name: "Latrice Royale",
    username: "latriceroyale",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/b4/JinkxMonsoonS5CastMug.jpg/revision/latest?cb=20210901194046",
    name: "Jinkx Monsoon",
    username: "thejinkx",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8e/AlaskaS5CastMug.jpg/revision/latest?cb=20210901193454",
    name: "Alaska",
    username: "theonlyalaska5000",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/96/DetoxS5CastMug.jpg/revision/latest?cb=20210901193714",
    name: "Detox",
    username: "theonlydetox",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/45/AlyssaEdwardsS5CastMug.jpg/revision/latest?cb=20210901193559",
    name: "Alyssa Edwards",
    username: "alyssaedwards_1",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7a/BiancaS6Promo.jpg/revision/latest?cb=20200506043328",
    name: "Bianca Del Rio",
    username: "thebiancadelrio",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/df/AdoreS6Promo.jpg/revision/latest?cb=20141201013826",
    name: "Adore Delano",
    username: "adoredelano",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/19/CourtneyS6Promo.png/revision/latest?cb=20141201013826",
    name: "Courtney Act",
    username: "courtneyact",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8f/BenDeLaCremeS6Promo.jpg/revision/latest?cb=20230725021516",
    name: "BenDeLaCreme",
    username: "bendelacreme",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ab/Violet_Chachki.jpg/revision/latest?cb=20200909033256",
    name: "Violet Chachki",
    username: "violetchachki",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f5/Ginger_Minj.jpg/revision/latest?cb=20141208032655",
    name: "Ginger Minj",
    username: "gingerminj",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/b2/Katya.jpg/revision/latest?cb=20141208032805",
    name: "Katya",
    username: "katya_zamo",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)

10.times do
    Post.create(
        location: Faker::Address.country,
        image: Faker::LoremPixel.image(size: "1080x1080", category: 'abstract'),
        caption: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15)
    )
end
10.times do
    Post.create(
        location: Faker::Address.country,
        image: Faker::LoremPixel.image(size: "1080x1080", category: 'nightlife'),
        caption: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15)
    )
end
10.times do
    Post.create(
        location: Faker::Address.country,
        image: Faker::LoremPixel.image(size: "1080x1080", category: 'animals'),
        caption: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15)
    )
end
10.times do
    Post.create(
        location: Faker::Address.country,
        image: Faker::LoremPixel.image(size: "1080x1080", category: 'fashion'),
        caption: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15)
    )
end

150.times do
    Comment.create(
        content: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15),
        post_id: rand(1..40)
    )
end

300.times do
    Like.create(
        post_id: rand(1..40),
        user_id: rand(1..15)
    )
end


puts "✅ Done seeding!"