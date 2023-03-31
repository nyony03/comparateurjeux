const express = require ('express')
const router = express.Router()

const createUserController = require('../Controller/userController/createUser')
const getAllUserController = require('../Controller/userController/getAllUser')
const getUserByLogin = require('../Controller/userController/getUserByLogin')
const authentification = require('../Controller/authentificationController/authController')
const {login} = require("passport/lib/http/request");


router
    .route('/')
    .get((req, res) => getAllUserController.getAllUser())
    .post((req, res) => createUserController.createUser(req, res))

router
    .route('/:login')
    .get((req, res) => getUserByLogin.getUserByLogin(req.params.login, res))


module.exports = router;