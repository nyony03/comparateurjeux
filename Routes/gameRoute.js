const express = require ('express')
const router = express.Router()

const controllerGetAllGame = require('../Controller/gameController/gameList')
const controllerCreateGame = require('../Controller/gameController/createGame')
const controllerGetOneGame = require('../Controller/gameController/getGame')
const controllerUpdateOneGame = require('../Controller/gameController/updateGame')
const controllerDeleteOneGame = require('../Controller/gameController/deleteGame')
const authentification = require('../Controller/authentificationController/authController')


router
    .route('/')
    .get((req, res) => controllerGetAllGame.gameList(res))
    .post((req, res) => controllerCreateGame.createGame(req, res))

router
    .route('/:id')
    .get((req, res) => controllerGetOneGame.getGame(req.params.id, res))
    .put((req, res) => controllerUpdateOneGame.updateGame(req.params.id, req.body, res))
    .delete((req, res) => controllerDeleteOneGame.deleteGame(req.params.id))

module.exports = router;