const axios = require("axios");
const jwt = require('jsonwebtoken');
const secret = 'thisismysecret';

async function createUser(req, res){
    const token = req.headers.authorization.split(' ')[0];
    console.log(jwt.verify(token, secret));

    const login = req.body.login
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role ? req.body.role : 'user';

    if(!login){
        res.status(401).json({ error: 'Login was not provided.' })
    }

    if(!email){
        res.status(401).json({ error: 'email was not provided.' })
    }

    if(!password){
        res.status(401).json({ error: 'password was not provided.' })
    }

    const user = {
        'login' : login,
        'email' : email,
        'password' : password,
        'role' : role

    }

    const userBDD = await axios({
        method: 'post',
        url: 'https://testnode-811e.restdb.io/rest/utilisateur',
        data: user,
        headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });

    if(!userBDD){
        res.status(401).json({ error: 'User creation failure' })
        return
    }

    res.json(userBDD.data)

}

module.exports = {
    createUser: createUser,
}

