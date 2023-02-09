const express = require ('express')
const router = express.Router()
const authentificationController = require('../Controller/authentificationController/authController')

router
    .route('')
    .post((req, res) => authentificationController.authentification(req, res))

module.exports = router