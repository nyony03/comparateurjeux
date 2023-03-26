const express = require('express')
const app = express()
const gameRoute = require('./Routes/gameRoute')
const userRoute = require('./Routes/userRoute')
const authRoute = require('./Routes/authRoute')
const session = require('express-session');

// Ajoutez ce middleware avant les routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // ou spécifiez une liste de domaines autorisés au lieu de *
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use(session({
    secret: 'thisismysecret',
    resave: false,
    saveUninitialized: true
}));

app.use(express.json())

//route game
app.use('/app/game', gameRoute)

//route  user
app.use('/app/user', userRoute)

app.use('/app/login', authRoute)

// Erreur 404, si aucune route est trouvée
app.all('*', (req, res) => {
    res.json('La page n\'existe pas');
});

app.listen(3000, function(){
    console.log('Example app listenning on port 3000 !')
})
