const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const filmsController = require('../controllers/filmsController')


router.get('/api/users', userController.index)
router.post('/api/users', userController.create)
router.get('/api/users/:userId/', userController.show)
router.patch('/api/users/:userId/', userController.update)
router.delete('/api/users/:userId/', userController.delete)

router.get('/api/users/:userId/filmId', filmsController.index)
router.get('/api/users/films/:filmId', filmsController.show)
router.delete('/api/films/:filmId', filmsController.delete)
router.patch('/api/films/:filmId', filmsController.update)
router.post('/api/users/:userId/films', filmsController.create)



module.exports = router