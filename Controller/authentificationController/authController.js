const express = require('express')
const app = express()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const passportJWT = require('passport-jwt')
const secret = 'thisismysecret'
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const userController = require('../userController/getAllUser')

//avoir tous les users de la BDD
const users = userController.getAllUser()

//configuration
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

passport.use(
    new JwtStrategy(jwtOptions, function(payload, next) {

        users.then(function(resolvedUsers) {
            const user = resolvedUsers.find(user => user.login === payload.login);

            if (user) {
                next(null, user)
            } else {
                next(null, false)
            }
        })
    })
)

app.use(passport.initialize())

app.use(express.json())

async function authentification (req, res){
    const login = req.body.login
    const password = req.body.password

    if (!login || !password) {
        res.status(401).json({ error: 'login ou mot de passe n\'a pas été fourni.' })
        return
    }

    users.then(function(resolvedUsers) {
        const user = resolvedUsers.find(user => user.login === login);
        if (!user || user.password !== password) {
            res.status(401).json({ error: 'identifiant/mot de passe ne correspondent pas.' })
            return
        }

        let userJwt = ""
        if(user.role === 'user'){
            userJwt = jwt.sign({ id: user.id, role: 'user' }, secret);
        }

        if(user.role === 'admin'){
            userJwt = jwt.sign({ id: user.id, role: 'admin' }, secret);
        }

        res.json({ jwt: userJwt })
    });
}

function verificationToken(){
    passport.authenticate('jwt', { session: false })
}

module.exports = {
    authentification : authentification,
    verificationToken : verificationToken
}
