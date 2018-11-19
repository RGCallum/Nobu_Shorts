const User = require('../models/User.js')
const Film = require('../models/Film.js')
const Info = require('../models/Info.js')
const mongoose = require('./connections')

// const info1 = new Info({
//     name: "Oh Shh",
//     synopsis: "Lorem ipsum dolor sit amet, consectetur",
//     role: "Director",
//     type: "Film",
//     year: 2011,
//     location: "Brooklyn NY",
//     awards: "Telly Award, BC Best Screenwriter Award"
// })

// const info2 = new Info({
//     name: "Unthinkable",
//     synopsis: "Lorem ipsum dolor sit amet, consectetur",
//     role: "Director",
//     type: "Music Video",
//     year: 2012,
//     location: "Martha's Vineyard",
//     image: "/images/filmstrip.png",
//     awards: "Telly Award, BC Best Screenwriter Award"
// })

// const info3 = new Info({
//     name: "Women's Work",
//     synopsis: "Lorem ipsum dolor sit amet, consectetur",
//     role: "Director",
//     type: "Documentary",
//     year: 2012,
//     location: "Brooklyn NY",
//     image: "/images/filmstrip.png",
//     awards: "Telly Award, BC Best Screenwriter Award"
// })

// const info4 = new Info({
//     name: "Cakes Da Killa",
//     synopsis: "Lorem ipsum dolor sit amet, consectetur",
//     role: "Director",
//     type: "Documentary",
//     year: 2013,
//     location: "Brooklyn NY",
//     image: "/images/filmstrip.png",
//     awards: "Telly Award, BC Best Screenwriter Award"
// })
// const info5 = new Info({
//     name: "Seance",
//     synopsis: "Lorem ipsum dolor sit amet, consectetur",
//     role: "Director",
//     type: "Film",
//     year: 2018,
//     location: "Brooklyn NY",
//     image: "/images/filmstrip.png",
//     awards: "Telly Award, BC Best Screenwriter Award"
// })
// const info6 = new Info({
//     name: "Believer",
//     synopsis: "Lorem ipsum dolor sit amet, consectetur",
//     role: "Editor",
//     type: "Music Video",
//     year: 2018,
//     location: "Brooklyn NY",
//     image: "/images/filmstrip.png",
//     awards: "Telly Award, BC Best Screenwriter Award"
// })

// const info7 = new Info({
//     name: "Believer",
//     synopsis: "Lorem ipsum dolor sit amet, consectetur",
//     role: "Editor",
//     type: "Music Video",
//     year: 2018,
//     location: "Brooklyn NY",
//     image: "/images/filmstrip.png",
//     awards: "Telly Award, BC Best Screenwriter Award"
// })

// const info8 = new Info({
//     name: "Oh Shh",
//     synopsis: "Lorem ipsum dolor sit amet, consectetur",
//     role: "Director",
//     type: "Film",
//     year: 2011,
//     location: "Brooklyn NY",
//     image: "/images/filmstrip.png",
//     awards: "Telly Award, BC Best Screenwriter Award"
// })

// const info9 = new Info({
//     name: "GTW",
//     synopsis: "Lorem ipsum dolor sit amet, consectetur",
//     role: "Director",
//     type: "Film",
//     year: 2012,
//     location: "Brooklyn NY",
//     image: "/images/filmstrip.png",
//     awards: "Telly Award, BC Best Screenwriter Award"
// })
// const info10 = new Info({
//     name: "GTW",
//     synopsis: "Lorem ipsum dolor sit amet, consectetur",
//     role: "Director",
//     type: "Film",
//     year: 2012,
//     location: "Brooklyn NY",
//     image: "/images/filmstrip.png",
//     awards: "Telly Award, BC Best Screenwriter Award",
// })

const film1 = new Film({
    name: "Oh Shh",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/46445240_10156343546607499_4672479137313587200_n.jpg?_nc_cat=103&_nc_ht=scontent-atl3-1.xx&oh=1d7f024b838e7560b39c93e989b0f282&oe=5C6DFD9C",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    synopsis: "What's the worst thing that can happen on a first date?",
    role: "Director",
    type: "Film",
    year: 2011,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})
const film2 = new Film({
    name: "Unmasked",
    image: "https://i9.ytimg.com/vi/58e3Eo3Vh-E/mqdefault.jpg?sqp=CNCGyd8F&rs=AOn4CLC34ixm6L8wiJndc1l5ym8_F0Gdug&time=1542603748374",
    link: "https://youtu.be/58e3Eo3Vh-E",
    synopsis: "Reporter trying to unmask all the new superheroes",
    role: "Director",
    type: "Film",
    year: 2012,
    location: "Martha's Vineyard",
    awards: "Onfumes Director of the month"
})

const film3 = new Film({
    name: "Women's Work",
    image: "https://format-com-cld-res.cloudinary.com/image/private/s--rmDhqDCl--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/v1/d9cb7ac93087238cbffd1a0e060e2533/evidence_of_things.jpg?900",
    link: "https://www.jatovia.com/women-s-work#1",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Documentary",
    year: 2012,
    location: "Brooklyn NY",
    awards: "creenwriter Award"
})
const film4 = new Film({
    name: "Cakes Da Killa",
    image: "https://format-com-cld-res.cloudinary.com/image/private/s--oWF_JHp_--/c_crop,h_720,w_1066,x_107,y_0/c_fill,g_center,h_135,w_200/a_auto,fl_keep_iptc.progressive,q_95/944344-50450841-d20181019-27286-wnj59n433179094_1280.jpg?200",
    link: "https://www.youtube.com/watch?v=ZfqKmVFIvFI",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Documentary",
    year: 2013,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})
const film5 = new Film({
    name: "Seance",
    image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://vimeo.com/296219236?fbclid=IwAR25lrV6PsZtY1oqZIDeXkqdDuirakZrpD0Z_GtKNbrvV_ZgyvDu13nbqlA",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Film",
    year: 2018,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})
const film6 = new Film({
    name: "Believer",
    image: "/public/images/clapper.jpeg",
    link: "https://vimeo.com/213300154",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Editor",
    type: "Music Video",
    year: 2018,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})
const film7 = new Film({
    name: "GTW",
    image: "/public/images/clapper.jpeg",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    name: "Believer",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Editor",
    type: "Music Video",
    year: 2018,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})

const film8 = new Film({
    name: "Back to the Future",
    image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Film",
    year: 2011,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})
const film9 = new Film({
    name: "Back to the Future",
    image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Film",
    year: 2012,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})
const film10 = new Film({
    name: "Back to the Future",
    image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    synopsis: "Lorem ipsum dolor sit amet, consectetur",
    role: "Director",
    type: "Film",
    year: 2012,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award",
})

const user1 = new User({
    username: "India G",
    password: "1234",
    email: "sceneitpix@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/208171_10150149295942499_3384854_n.jpg?_nc_cat=111&_nc_ht=scontent-atl3-1.xx&oh=3c3860f0098c2d75265051e7cb4a26dc&oe=5C770518",
    films: [film1, film2]
})
const user2 = new User({
    username: "JTov",
    password: "1234",
    email: "jatoviagary.films@gmail.com",
    bio: "Ja’Tovia M. Gary (b. Dallas, TX. 1984) is an artist and filmmaker currently living and working in Brooklyn, New York. Gary’s work seeks to liberate the distorted histories through which Black life is often viewed while fleshing out a nuanced and multivalent Black interiority. Through documentary film and experimental video art, Gary charts the ways structures of power shape our perceptions around representation, race, gender, sexuality, and violence. ",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/182235_4628432183660_60965560_n.jpg?_nc_cat=102&_nc_ht=scontent-atl3-1.xx&oh=66140c1f429c068c1fe0baac38ccfc6a&oe=5C73B0E1",
    films: [film3, film4]
})
const user3 = new User({
    username: "Kirk R",
    password: "1234",
    email: "kirkrevil@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/40640178_2387864784563143_8407232597398126592_n.jpg?_nc_cat=110&_nc_ht=scontent-atl3-1.xx&oh=011dff69f560483733e58f3cfda1d543&oe=5C6CF9F7",
    films: [film5, film6]
})
const user4 = new User({
    username: "Alex E",
    password: "1234",
    email: "alex@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/42935548_10100884613519373_1344308520081686528_n.jpg?_nc_cat=100&_nc_ht=scontent-atl3-1.xx&oh=1a771ebb0a423cbc5d9d237ace8b5673&oe=5C756282",
    films: [film7, film8]
})
const user5 = new User({
    username: "Dave W",
    password: "1234",
    email: "lande@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10857812_10204399047689305_9171620012150857879_n.jpg?_nc_cat=104&_nc_ht=scontent-atl3-1.xx&oh=9bdf9dc98b33b38b3a3c0321cd4e9c41&oe=5C83769F",
    films: [film9, film10]
})


User.remove({})
    .then(() => Film.remove({}))
    // .then(() => Info.remove({}))
    .then(() => Film.insertMany([film1, film2, film3, film4, film5, film6, film7, film8, film9, film10]))
    // .then(() => Info.insertMany([info1, info2, info3, info4, info5, info6, info7, info8, info9, info10]))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => user3.save())
    .then(() => user4.save())
    .then(() => user5.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 