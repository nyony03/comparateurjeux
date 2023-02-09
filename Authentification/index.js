
const express = require('express')
const app = express()

const passport = require('passport')
const jwt = require('jsonwebtoken')
const passportJWT = require('passport-jwt')
const secret = 'thisismysecret'
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

const users = [{ login: "cecile@gmail.com", password: "1234" }]

passport.use(
    new JwtStrategy(jwtOptions, function(payload, next) {
        const user = users.find(user => user.login === payload.login)

        if (user) {
            next(null, user)
        } else {
            next(null, false)
        }
    })
)

app.use(passport.initialize())

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello world! 2 ')
})



app.get('/public', (req, res) => {
    res.send('public')
})

app.get('/private', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send('private. user:' + req.user.login)
})

app.post('/login', (req, res) => {

    const login = req.body.login
    const password = req.body.password

    if (!login || !password) {
        res.status(401).json({ error: 'login ou mot de passe n\'a pas été fourni.' })
        return
    }

    const user = users.find(user => user.login === login)

    if (!user || user.password !== password) {
        res.status(401).json({ error: 'identifiant/mot de passe ne correspondent pas.' })
        return
    }

    const userJwt = jwt.sign({ login: user.login }, secret)

    res.json({ jwt: userJwt })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})