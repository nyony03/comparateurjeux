const axios = require("axios");

async function createUser(req, res){
    const login = req.body.login
    const email = req.body.email
    const password = req.body.password

    if(!login || !email || !password){
        res.status(401).json({ error: 'Login or email or password was not provided.' })
        return
    }

    const user = {
        'login' : login,
        'email' : email,
        'password' : password
    }

    await axios({
        method: 'post',
        url: 'https://testnode-811e.restdb.io/rest/utilisateur',
        data: user,
        headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });

    return user
}

module.exports = {
    createUser: createUser,
}
