const User = require('../models/User.js')
const Film = require('../models/Film.js')
const mongoose = require('./connections')



const film1 = new Film({
    name: "Oh Shh",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/46445240_10156343546607499_4672479137313587200_n.jpg?_nc_cat=103&_nc_ht=scontent-atl3-1.xx&oh=1d7f024b838e7560b39c93e989b0f282&oe=5C6DFD9C",
    link: "https://www.youtube.com/watch?v=PSGxK8Ruvow",
    tagline: "What's the worst thing that can happen on a first date?",
    role: "Director",
    type: "Film",
    year: 2011,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})
const film2 = new Film({
    name: "Unmasked",
    image: "https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/04/08/unmasked-cover-3_4.jpg?width=534&height=712&fit=crop",
    link: "https://youtu.be/58e3Eo3Vh-E",
    tagline: "Who are all these new Superheroes? Paige Cruise is on a mission to unmask them all!",
    role: "Director",
    type: "Film",
    year: 2012,
    location: "Brooklyn NY",
    awards: "Onfumes Director of the month"
})

const film3 = new Film({
    name: "Women's Work",
    image: "https://format-com-cld-res.cloudinary.com/image/private/s--rmDhqDCl--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/v1/d9cb7ac93087238cbffd1a0e060e2533/evidence_of_things.jpg?900",
    link: "https://www.jatovia.com/women-s-work#1",
    tagline: "A documentation of the creative process of Simone Leigh, a Brooklyn based sculptor and video artist.",
    role: "Director",
    type: "Documentary",
    year: 2012,
    location: "Brooklyn NY",
    awards: "Screenwriter Award"
})
const film4 = new Film({
    name: "Cakes Da Killa",
    image: "https://format-com-cld-res.cloudinary.com/image/private/s--oWF_JHp_--/c_crop,h_720,w_1066,x_107,y_0/c_fill,g_center,h_135,w_200/a_auto,fl_keep_iptc.progressive,q_95/944344-50450841-d20181019-27286-wnj59n433179094_1280.jpg?200",
    link: "https://www.youtube.com/watch?v=ZfqKmVFIvFI",
    tagline: "An electrifying portrait of a young artist determined to live life on his own terms.",
    role: "Director",
    type: "Documentary",
    year: 2013,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})
const film5 = new Film({
    name: "Seance",
    image: "https://images.unsplash.com/photo-1505274664176-44ccaa7969a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=530ea4fb5bbbc3037756eea3d3443048&auto=format&fit=crop&w=634&q=80",
    link: "https://vimeo.com/296219236?fbclid=IwAR25lrV6PsZtY1oqZIDeXkqdDuirakZrpD0Z_GtKNbrvV_ZgyvDu13nbqlA",
    tagline: "Be careful of what or who you wish for!",
    role: "Director",
    type: "Film",
    year: 2018,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})
const film6 = new Film({
    name: "Believer",
    image: "https://images.unsplash.com/photo-1506641426274-63f30bfff462?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ed2f9fe76126ea0000c32535953cb23&auto=format&fit=crop&w=634&q=80",
    link: "https://vimeo.com/213300154",
    tagline: "A personal edit of a favorite video",
    role: "Editor",
    type: "Music Video",
    year: 2018,
    location: "Brooklyn NY",
    awards: "Telly Award, BC Best Screenwriter Award"
})
const film7 = new Film({
    name: "Second Generation Wedding",
    image: "https://m.media-amazon.com/images/M/MV5BOTc5NWNjOWItMjQ3YS00YjUwLWEzNDEtMjliMDUyMTQ5YjcwXkEyXkFqcGdeQXVyMjQ2NTQwNzA@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    link: "https://www.onescribemedia.com/second-generation-wedding",
    tagline: "A Nigerian-American bride is derailed by a secret that could forever change the course of her family's future.",
    role: "Writer/Director",
    type: "Film",
    year: 2018,
    location: "New York",
    awards: "In Post-Production"
})

const film8 = new Film({
    name: "Privilege Unhinged",
    image: "https://m.media-amazon.com/images/M/MV5BN2VhNDMxODctMGQxNi00MmNkLWE5OGQtN2M5NTliMzUyNDc1XkEyXkFqcGdeQXVyNjg4OTMyMTM@._V1_SY1000_CR0,0,707,1000_AL_.jpg",
    link: "https://www.imdb.com/title/tt1602010/videoplayer/vi915867161?ref_=tt_ov_vi",
    tagline: "A young black professional struggles to speak up about racial disparities at her job after a very tense encounter with colleagues.",
    role: "Director/Writer",
    type: "Film",
    year: 2017,
    location: "New York",
    awards: "Screening"
})
const film9 = new Film({
    name: "Granville T. Woods",
    image: "http://www.coneyislandhistory.org/sites/default/files/hall-of-fame/images/granville-t-woods.jpg",
    link: "https://www.youtube.com/watch?v=4PB6pYrUrr8&t=167s",
    tagline: "A compelling look into the life of African American Inventor Granville T. Woods.",
    role: "Narrator",
    type: "Documentary",
    year: 2010,
    location: "Brooklyn NY",
    awards: "Telly Award"
})
const film10 = new Film({
    name: "Landmark Tours",
    image: "http://www.subwaynut.com/irt/bleeckern6/bleeckern67.jpg",
    link: "https://www.youtube.com/watch?v=240_76wqvj4",
    tagline: "A quick look at one of the original IRT stations' architecture (Bleeker Street) dating back to 1904 boasting classic mosaics and terra cotta finishes.",
    role: "Producer/Reporter",
    type: "News Segment",
    year: 2014,
    location: "Brooklyn NY",
    awards: "Telly Award",
})

const user1 = new User({
    username: "India R. Guy",
    password: "1234",
    email: "sceneitpix@gmail.com",
    bio: "An aspiring Director since the age of 13, India R. Guy began her filmmaking career by chance, when she shot a short comedy about the life of a song through performing rights company ASCAP. She then went on to study Film at Brooklyn college, where she produced, wrote, shot and edited a variety of films, music videos and documentaries. After graduating with a Bachelor of Arts in Film Production, she then when on to work at various News Television stations and Production companies in New York, as well as a brief stint aboard a cruise ship as a Broadcast Technician. India is currently the senior editor for “Hello Again Memories” and “SceneIt Pictures”.",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/208171_10150149295942499_3384854_n.jpg?_nc_cat=111&_nc_ht=scontent-atl3-1.xx&oh=3c3860f0098c2d75265051e7cb4a26dc&oe=5C770518",
    films: [film1, film2]
})
const user2 = new User({
    username: "Ja'Tovia Gary",
    password: "1234",
    email: "jatoviagary.films@gmail.com",
    bio: "Ja’Tovia M. Gary (b. Dallas, TX. 1984) is an artist and filmmaker currently living and working in Brooklyn, New York. Gary’s work seeks to liberate the distorted histories through which Black life is often viewed while fleshing out a nuanced and multivalent Black interiority. Through documentary film and experimental video art, Gary charts the ways structures of power shape our perceptions around representation, race, gender, sexuality, and violence. ",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/430010_4069878260161_907945121_n.jpg?_nc_cat=108&_nc_ht=scontent-atl3-1.xx&oh=aeb71085e0be9d5915915fa937d95462&oe=5C686213",
    films: [film3, film4]
})
const user3 = new User({
    username: "Kirk Revil",
    password: "1234",
    email: "kirkrevil@gmail.com",
    bio: "Revil Media is a one-stop shop for all your video production needs. We cater to all budgets. We offer services in Video Production, Videography, Photography, and Video Editing. Video Production: We have produced several films, music videos, EPK’s and promotional videos. We work with our clients from concept to production, insuring that our clients get the most value for their buck. Each client gets personalized assistance that is catered to the needs of their project.",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/40640178_2387864784563143_8407232597398126592_n.jpg?_nc_cat=110&_nc_ht=scontent-atl3-1.xx&oh=011dff69f560483733e58f3cfda1d543&oe=5C6CF9F7",
    films: [film5, film6]
})
const user4 = new User({
    username: "Lande Yoosuf",
    password: "1234",
    email: "lande@gmail.com",
    bio: "Lande Yoosuf is a television industry professional with over 10 years of experience casting at networks such as MTV, NBC, WEtv, truTV and Bravo to name a few. Lande oversees all aspects of directing, casting and production at One Scribe Media with a strong emphasis on story composition. Lande is fully committed to ensuring that her client’s creative goals, vision and needs are met while keeping with One Scribe Media’s expressed brand.",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1919178_10100382113787863_7630583830494781762_n.jpg?_nc_cat=101&_nc_ht=scontent-atl3-1.xx&oh=a14a6e6784971dab895f7eb261f1d956&oe=5CB26BBF",
    films: [film7, film8]
})
const user5 = new User({
    username: "Dave Wallen",
    password: "1234",
    email: "dozwall@gmail.com",
    bio: "Dave Wallen is a Television Production Professional (Freelance/Contract) with 9+ solid years of industry experience in various forms of media: Live Event, Commercial, Promotional, Corporate, Training, Industrial, Educational, Documentary, & Milestone; Strong creative ability to conceptualize, develop, and enterprise ideas from pre to post; Resourceful, proven abilities with strong problem solving skills; experience with colleagues at all levels; adaptable to meet changing and challenging demands.",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10857812_10204399047689305_9171620012150857879_n.jpg?_nc_cat=104&_nc_ht=scontent-atl3-1.xx&oh=9bdf9dc98b33b38b3a3c0321cd4e9c41&oe=5C83769F",
    films: [film9, film10]
})


User.remove({})
    .then(() => Film.remove({}))
    .then(() => Film.insertMany([film1, film2, film3, film4, film5, film6, film7, film8, film9, film10]))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => user3.save())
    .then(() => user4.save())
    .then(() => user5.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 