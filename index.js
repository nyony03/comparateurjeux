const express = require('express')

const app = express()

// user non authentifié
// inscription
app.post('/inscription', function (req, res){
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

// authentifié en tant qu'admin
// ajout jeu
app.post('/addJeu', function(req, res){
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


