const express = require ('express')
const router = express.Router()

const createUserController = require('../Controller/userController/createUser')
const getAllUserController = require('../Controller/userController/getAllUser')


router
    .route('/')
    .get((req, res) => createUserController.createUser(res))
    .post((req, res) => getAllUserController.getAllUser(req, res))

module.exports = router;