const express = require('express')
const app = express()
const gameRoute = require('./Routes/gameRoute')
const userRoute = require('/Routes/userRoute')


app.use(express.json())

//route game
app.use('/game', gameRoute)

//route  user
app.use('/user', userRoute)

// Erreur 404, si aucune route est trouvée
app.all('*', (req, res) => {
    res.json('La page n\'existe pas');
});

app.listen(3000, function(){
    console.log('Example app listenning on port 3000 !')
})
