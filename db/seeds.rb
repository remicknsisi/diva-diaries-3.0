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
        image: 'https://pyxis.nymag.com/v1/imgs/527/df4/8d0844b20983ad42dbd3f829d6610d8273-recaps-rupaul-down-under-ep-1.rsquare.w700.jpg',
        caption: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15)
    )
end
10.times do
    Post.create(
        location: Faker::Address.country,
        image: 'https://pyxis.nymag.com/v1/imgs/563/6a3/208eeb45af5cf37307633254a47c7f49e3-24-rupaul-makeup.rsquare.w700.jpg',
        caption: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15)
    )
end
10.times do
    Post.create(
        location: Faker::Address.country,
        image: 'https://pyxis.nymag.com/v1/imgs/172/887/76a6c024da7d6cfaf40285d987c04486d1-rupaul-drag-race-all-stars.rsquare.w700.jpg',
        caption: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15)
    )
end
10.times do
    Post.create(
        location: Faker::Address.country,
        image: 'https://pyxis.nymag.com/v1/imgs/921/694/16534c10a39a562bc32a69b45dcb1c1138-28-rupaul.rsquare.w700.jpg',
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

150.times do
    DirectMessage.create(
        content: Faker::TvShows::RuPaul.quote,
        user_id: rand(1..15),
        # recipient_id: 
    )
end


puts "✅ Done seeding!"