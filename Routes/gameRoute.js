const express = require ('express')
const router = express.Router()

const controllerGetAllGame = require('../Controller/gameController/gameList')
const controllerCreateGame = require('../Controller/gameController/createGame')
const controllerGetGame = require('../Controller/gameController/getGame')
const controllerUpdateOneGame = require('../Controller/gameController/updateGame')
const controllerDeleteOneGame = require('../Controller/gameController/deleteGame')
const authentification = require('../Controller/authentificationController/authController')


router
    .route('/')
    .get((req, res) => controllerGetAllGame.gameList(res))
    .post(authentification.verificationToken(), (req, res) => controllerCreateGame.createGame(req, res))

router
    .route('/:id')
    .get((req, res) => controllerGetGame.getGame(req.params.id, res))
    .get((req, res) => controllerGetGame.getGameByName(req.params.name, res))
    .put(authentification.verificationToken(), (req, res) => controllerUpdateOneGame.updateGame(req.params.id, req.body, res))
    .delete(authentification.verificationToken(), (req, res) => controllerDeleteOneGame.deleteGame(req.params.id, res))

module.exports = router;