const User = require('../models/User.js')
const Film = require('../models/Film.js')
const Info = require('../models/Info.js')
const mongoose = require('./connections')

const info1 = new Info({
    name: "Oh Shh",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    date: 4/20/18,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})

const info2 = new Info({
    name: "GTW",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    date: 4/20/18,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})
const film1 = new Film({
    name: "Oh Shh",
    image: "/images/clapper.png",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    info: [info1, info2]
})
const film2 = new Film({
    name: "GTW",
    image: "/images/clapper.png",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    info: [info1, info2]
})

const film3 = new Film({
    name: "Back to the Future",
    image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    info: [info2]
})

const user1 = new User({
    username: "India G",
    password: "1234",
    email: "sceneitpix@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/IndiaGPic.png",
    films: [film1, film2]
})
const user2 = new User({
    username: "Dave W",
    password: "1234",
    email: "dozwall@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/DavePic2.png",
    films: [film3]
})
const user3 = new User({
    username: "Kirk R",
    password: "1234",
    email: "kirkrevil@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/KirkRPic.png",
    films: [film1, film2]
})
const user4 = new User({
    username: "Alex E",
    password: "1234",
    email: "alex@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/AlexPic.png",
    films: [film1, film2]
})
const user5 = new User({
    username: "Lande Y",
    password: "1234",
    email: "lande@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/LandePic.png",
    films: [film1, film2]
})


User.remove({})
    .then(() => Film.remove({}))
    .then(() => Info.remove({}))
    .then(() => Film.insertMany(film1, film2))
    .then(() => Info.insertMany(info1, info2))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => user3.save())
    .then(() => user4.save())
    .then(() => user5.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 