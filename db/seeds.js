const User = require('../models/User.js')
const Film = require('../models/Film.js')
const Info = require('../models/Info.js')
const mongoose = require('./connections')

const info1 = new Info({
    name: "Oh Shh",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Film",
    year: 2011,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})

const info2 = new Info({
    name: "Unthinkable",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Music Video",
    year: 2012,
    location: "Martha's Vineyard",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})

const info3 = new Info({
    name: "Women's Work",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Documentary",
    year: 2012,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})

const info4 = new Info({
    name: "Cakes Da Killa",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Documentary",
    year: 2013,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})
const info5 = new Info({
    name: "Seance",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Film",
    year: 2018,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})
const info6 = new Info({
    name: "Believer",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Editor",
    type: "Music Video",
    year: 2018,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})

const info7 = new Info({
    name: "Believer",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Editor",
    type: "Music Video",
    year: 2018,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})

const info8 = new Info({
    name: "Oh Shh",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Film",
    year: 2011,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})

const info9 = new Info({
    name: "GTW",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Film",
    year: 2012,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})
const info10 = new Info({
    name: "GTW",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Film",
    year: 2012,
    location: "Brooklyn NY",
    image: "/images/filmstrip.png",
    awards: "Bronze Telly Award, BC Best Screenwriter Award"
})

const film1 = new Film({
    name: "Oh Shh",
    image: "/public/images/clapper.jpeg",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    info: [info1]
})
const film2 = new Film({
    name: "Unthinkable",
    image: "/public/images/clapper.jpeg",
    link: "https://www.youtube.com/watch?v=vFmJwyEYUtc",
    info: [info2]
})

const film3 = new Film({
    name: "Women's Work",
    image: "/public/images/clapper.jpeg",
    link: "https://www.jatovia.com/women-s-work#1",
    info: [info3]
})
const film4 = new Film({
    name: "Cakes Da Killa: NO HOMO",
    image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://www.youtube.com/watch?v=ZfqKmVFIvFI",
    info: [info4]
})
const film5 = new Film({
    name: "Seance",
    image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://vimeo.com/296219236?fbclid=IwAR25lrV6PsZtY1oqZIDeXkqdDuirakZrpD0Z_GtKNbrvV_ZgyvDu13nbqlA",
    info: [info5]
})
const film6 = new Film({
    name: "Believer",
    image: "/public/images/clapper.jpeg",
    link: "https://vimeo.com/213300154",
    info: [info6]
})
const film7 = new Film({
    name: "GTW",
    image: "/public/images/clapper.jpeg",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    info: [info7]
})

const film8 = new Film({
    name: "Back to the Future",
    image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    info: [info8]
})
const film9 = new Film({
    name: "Back to the Future",
    image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    info: [info9]
})
const film10 = new Film({
    name: "Back to the Future",
    image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    info: [info10]
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
    username: "JTov",
    password: "1234",
    email: "jatoviagary.films@gmail.com",
    bio: "Ja’Tovia M. Gary (b. Dallas, TX. 1984) is an artist and filmmaker currently living and working in Brooklyn, New York. Gary’s work seeks to liberate the distorted histories through which Black life is often viewed while fleshing out a nuanced and multivalent Black interiority. Through documentary film and experimental video art, Gary charts the ways structures of power shape our perceptions around representation, race, gender, sexuality, and violence. ",
    image: "/public/images/JTovPic.jpg",
    films: [film3, film4]
})
const user3 = new User({
    username: "Kirk R",
    password: "1234",
    email: "kirkrevil@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/KirkRPic.png",
    films: [film5, film6]
})
const user4 = new User({
    username: "Alex E",
    password: "1234",
    email: "alex@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/AlexPic.png",
    films: [film7, film8]
})
const user5 = new User({
    username: "Lande Y",
    password: "1234",
    email: "lande@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/LandePic.png",
    films: [film9, film10]
})


User.remove({})
    .then(() => Film.remove({}))
    .then(() => Info.remove({}))
    .then(() => Film.insertMany([film1, film2, film3, film4, film5, film6, film7, film8, film9, film10]))
    .then(() => Info.insertMany([info1, info2, info3, info4, info5, info6, info7, info8, info9, info10]))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => user3.save())
    .then(() => user4.save())
    .then(() => user5.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 