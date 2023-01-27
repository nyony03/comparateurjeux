const express = require('express')
const axios = require('axios')
const app = express()
const createUser = require('./createUser')
const createGame = require('./createGame')


app.use(express.json())

// user non authentifié
// inscription
app.post('/createUser', (req, res) => {
    createUser.createUser(req, res)
    res.send()
})

// authentifié en tant qu'admin
//ajout des jeux dans la base de données
app.post('/addGame', (req, res) => {
    createGame.createGame(req, res)
    res.send()
})
//connexion
app.post('/authentification', function(req, res){
    res.send()
})

//recupérer un element
app.get('/unjeu', function (req, res){
    res.send()
})

//listing des produits
app.get('/productList', function (req, res){
    res.send()
})


// delete jeu
app.delete('/deleteJeu', function (req, res) {
    res.send()
})

// authentifié en tant qu'utilisateur
app.get('/updateJeu', function(req, res){
    res.send()
})

app.listen(3000, function(){
    console.log('Example app listenning on port 3000 !')
})
