const axios = require("axios");

async function getUserByLogin(login, res){

    const usersList = await axios({
        method: 'get',
        url: 'https://testnode-811e.restdb.io/rest/utilisateur',
        headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });

    if(!usersList){
        res.status(401).json({ error: 'No user found in the database.' })
        return
    }

    const user = usersList.data.filter((user) => user.login === login)

    res.json(user);

}

module.exports = {
    getUserByLogin : getUserByLogin
}