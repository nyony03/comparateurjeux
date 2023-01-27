const express = require('express')
const axios = require('axios')
const app = express()
const createUser = require('./createUser')
const createGame = require('./createGame')
const getGame = require('./getGame')
const gameList = require('./gameList')
const deleteGame = require('./deleteGame')


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
app.get('/game/:id', async function (req, res){
    const game = await getGame.getGame(req.params.id, res)
    res.json(game)
})

//listing des produits
app.get('/allGame', async function (req, res){
    const allGame = await gameList.gameList(res)
    res.json(allGame)
})


// delete jeu
app.delete('/deleteJeu/:id', async function (req, res) {
    await deleteGame.deleteGame(req.params.id)
    // res.send('le jeu qui a un id' + req.param.id + 'a été supprimé avec succès')
})

// authentifié en tant qu'utilisateur
app.get('/updateJeu', function(req, res){
    res.send()
})

app.listen(3000, function(){
    console.log('Example app listenning on port 3000 !')
})
