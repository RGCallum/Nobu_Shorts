const User = require('../models/User.js')
const Film = require('../models/Film.js')
const Info = require('../models/Info.js')

const mongoose = require('./connections')

const Cameras = new Info({
    name: "Cameras",
    available: 4,
    image: "/images/camera.png"
})

const LightKits = new Info({
    name: "Light Kits",
    available: 5,
    image: "/images/lightKit.png"

})

const Tripods = new Info({
    name: "Tripods",
    available: 4,
    image: "/images/tripod.png"

})

const Lenses = new Info({
    name: "Lenses",
    available: 14,
    image: "/images/lenses.png"


})

const Reflectors = new Info({
    name: "Reflectors",
    available: 15,
    image: "/images/reflectors.png"


})

const Printers = new Info({
    name: "Printers",
    available: 4,
    image: "/images/printer.png"

})

const ExtensionCords = new Info({
    name: "Extension Cords",
    available: 24,
    image: "/images/extensionCord.png"


})
const Sandbags = new Info({
    name: "Sandbags",
    available: 30,
    image: "/images/sandbags.png"


})
const Backdrops = new Info({
    name: "Backdrops",
    available: 10,
    image: "/images/backdrops.png"

})

const Computers = new Info({
    name: "Computers",
    available: 10,
    image: "/images/macs.png"

})

const Gels = new Info({
    name: "Gels",
    available: 30,
    image: "/images/gels.png"

})


const wedding = new Film({
    name: "Johnson Wedding",
    date: "12-2-18",
    time: "6pm",
    location: "Wakanda",
    type: "wedding",
    filminfo: [Cameras, LightKits, Backdrops, Computers, Printers, Lenses]
})

const reunion = new Film({
    name: "Brown Reunion",
    date: "06-21-19",
    time: "10am",
    location: "Sokovia",
    type: "reunion",
    filminfo: [Cameras, Reflectors, Computers]

})

const anniversary = new Film({
    name: "Garrick Anniversary",
    date: "04-20-19",
    time: "8pm",
    location: "Earth2",
    type: "reunion",
    filminfo: [Cameras, Gels, Printers, Backdrops, Tripods, Computers]

})

const formal = new Film({
    name: "Wallace Sweet 16",
    date: "05-20-19",
    time: "8pm",
    location: "Brooklyn",
    type: "Formal Party",
    filminfo: [Cameras, Lenses, Backdrops, Tripods, Printers, Computers]

})

const casual = new Film({
    name: "Allen 30th Birthday",
    date: "08-20-19",
    time: "8pm",
    location: "Central City",
    type: "Casual Party",
    filminfo: [Cameras, Reflectors, Lenses, Tripods]

})

const user1 = new User({
    username: "India G",
    password: "1234",
    email: "sceneitpix@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/IndiaGPic.png",
    films: [Oh Shh, GTW, reunion]
})
const user2 = new User({
    username: "Dave W",
    password: "1234",
    email: "dozwall@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/DavePic2.png",
    films: [Oh Shh, GTW, Unthinkable]
})
const user3 = new User({
    username: "Kirk R",
    password: "1234",
    email: "kirkrevil@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/KirkRPic.png",
    films: [Seance, Invisible, film3]
})
const user4 = new User({
    username: "Alex E",
    password: "1234",
    email: "alex@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/AlexPic.png",
    films: [film1, film2, film3]
})
const user5 = new User({
    username: "Lande Y",
    password: "1234",
    email: "lande@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/images/LandePic.png",
    films: [film1, film2, film3]
})


User.remove({})
    .then(() => Film.remove({}))
    .then(() => Info.remove({}))
    .then(() => Film.insertMany([wedding, reunion, anniversary, casual, formal]))
    .then(() => Info.insertMany([Cameras, LightKits, Tripods, Lenses, Reflectors, Printers, ExtensionCords, Sandbags, Backdrops, Computers, Gels]))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => user3.save())
    .then(() => user4.save())
    .then(() => user5.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 