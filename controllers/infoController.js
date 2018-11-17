const Film = require('../models/Film')
const Info = require('../models/Info')

const infoController = {
    index: (req, res) => {
        // var filmId = req.params.filmId
        Film.findById(req.params.filmId).populate('infos')
            .then((film) => {
                res.send(film.infos)
            })
    },
    show: (req, res) => {
        // var infoId = req.params.infoId
        Info.findById(req.params.infoId)
            .then((info) => {
                res.send(info)
            })
    },
    delete: (req, res) => {
        // var infoId = req.params.infoId
        Info.findByIdAndDelete(req.params.infoId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        // var infoId = req.params.infoId
        Info.findByIdAndUpdate(req.params.infoId, req.body, { new: true })
            .then((updatedFilm) => {
                updatedFilm.save()
                res.send(updatedFilm)
            })
    },
    create: (req, res) => {
        // var filmId = req.params.filmId
        Film.findById(req.params.filmId)
            .then((film) => {
                console.log(film)
                Info.create(req.body)
                    .then((newFilm) => {
                        console.log(newFilm)
                        film.infos.push(newFilm)
                        film.save()
                        res.send(newFilm)
                    })
            })
    }

}

module.exports = infoController