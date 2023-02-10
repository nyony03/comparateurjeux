const express = require ('express')
const router = express.Router()

const createUserController = require('../Controller/userController/createUser')
const getAllUserController = require('../Controller/userController/getAllUser')
const authentification = require('../Controller/authentificationController/authController')
const passport = require("passport");


router
    .route('/')
    .get((req, res) => getAllUserController.getAllUser())
    .post((req, res) => createUserController.createUser(req, res))

module.exports = router;