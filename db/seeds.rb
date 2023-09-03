require 'faker'

puts "🌱 Seeding data..."

User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/fd/SharonNeedlesS4CastMug.jpg",
    name: "Sharon Needles",
    username: "sharonneedlespgh",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ea/ChadMichaelsS4CastMug.jpg",
    name: "Chad Michaels",
    username: "chadmichaelsallstar",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/46/PhiPhiO%27HaraS4CastMug.jpg",
    name: "Phi Phi O'Hara",
    username: "phiphiphiphi",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7a/LatriceRoyaleS4CastMug.jpg",
    name: "Latrice Royale",
    username: "latriceroyale",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/b4/JinkxMonsoonS5CastMug.jpg",
    name: "Jinkx Monsoon",
    username: "thejinkx",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8e/AlaskaS5CastMug.jpg",
    name: "Alaska",
    username: "theonlyalaska5000",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/96/DetoxS5CastMug.jpg",
    name: "Detox",
    username: "theonlydetox",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/45/AlyssaEdwardsS5CastMug.jpg",
    name: "Alyssa Edwards",
    username: "alyssaedwards_1",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7a/BiancaS6Promo.jpg",
    name: "Bianca Del Rio",
    username: "thebiancadelrio",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/df/AdoreS6Promo.jpg",
    name: "Adore Delano",
    username: "adoredelano",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/19/CourtneyS6Promo.png",
    name: "Courtney Act",
    username: "courtneyact",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8f/BenDeLaCremeS6Promo.jpg",
    name: "BenDeLaCreme",
    username: "bendelacreme",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ab/Violet_Chachki.jpg",
    name: "Violet Chachki",
    username: "violetchachki",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f5/Ginger_Minj.jpg",
    name: "Ginger Minj",
    username: "gingerminj",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)
User.create(
    profile_picture: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/b2/Katya.jpg",
    name: "Katya",
    username: "katya_zamo",
    bio: Faker::TvShows::RuPaul.quote,
    password: "password",
    password_confirmation: "password"
)

10.times do
    Post.create(
        location: Faker::Address.country,
        image: 'https://teesvalley-ca.gov.uk/visit/wp-content/uploads/sites/4/2022/11/RuPaul-S4-768x432-ETV.jpg',
        caption: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15)
    )
end
10.times do
    Post.create(
        location: Faker::Address.country,
        image: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/9f/RDR8.jpg',
        caption: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15)
    )
end
10.times do
    Post.create(
        location: Faker::Address.country,
        image: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/drag-race-square-ak-2aa507.jpg',
        caption: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15)
    )
end
10.times do
    Post.create(
        location: Faker::Address.country,
        image: 'https://static01.nyt.com/images/2014/02/23/fashion/23SUBRUPAUL_SPAN/23SUBRUPAUL-superJumbo.jpg',
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