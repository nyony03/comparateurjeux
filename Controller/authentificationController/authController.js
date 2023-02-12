const express = require('express')
const token = require('jsonwebtoken')
const passport = require("passport");
const ExtractJWT = require('passport-jwt').ExtractJwt;
const userController = require('../userController/getAllUser')
const JwtStrategy = require('passport-jwt').Strategy;


//avoir tous les users de la BDD
const users = userController.getAllUser()

const app = express()
const secret = 'thisismysecret'

//utilisation de la session pour mettre l'user dans la session
app.use(passport.session());

//pour serializer user pour utilisée pour convertir l'objet utilisateur en chaîne JSON
// car l'application ne peut pas sérialiser l'utilisateur pour le stocker dans la session
passport.serializeUser(function(users, done) {
    done(null, JSON.stringify(users));
});

passport.deserializeUser(function(users, done) {
    done(null, JSON.parse(users));
});

const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
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

app.use(passport.initialize(undefined))

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

        const userJwt = token.sign({ login: user.login}, secret);


        res.json({ jwt: userJwt })
    });
}

function verificationToken(){
    return passport.authenticate('jwt', { session: true })
}

module.exports = {
    authentification : authentification,
    verificationToken : verificationToken
}
