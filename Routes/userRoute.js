const express = require ('express')
const router = express.Router()

const createUserController = require('../Controller/userController/createUser')
const getAllUserController = require('../Controller/userController/getAllUser')
const authentification = require('../Controller/authentificationController/authController')


router
    .route('/')
    .get((req, res) => getAllUserController.getAllUser())
    .post(authentification.verificationToken,(req, res) => createUserController.createUser(req, res))

module.exports = router;