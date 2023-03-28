const axios = require("axios");
async function createUser(req, res){
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

    // Vérifier si l'utilisateur existe déjà
    const userList = await axios({
        method: 'get',
        url: 'https://testnode-811e.restdb.io/rest/utilisateur',
        headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });

    const userExisting = userList.data.filter((user) => user.login === login)
    if (userExisting.length !== 0) {
        res.status(401).json({ error: "User already exists." });
        return;
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

