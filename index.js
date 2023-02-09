const express = require('express')
const app = express()
const gameRoute = require('./Routes/gameRoute')
const userRoute = require('./Routes/userRoute')
const authRoute = require('./Routes/authRoute')


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
