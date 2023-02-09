const axios = require("axios");

async function getAllUser(res){

    const user = await axios({
        method: 'get',
        url: 'https://testnode-811e.restdb.io/rest/utilisateur',
        data: user,
        headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });

    if(!user){
        res.status(401).json({ error: 'No user found in the database.' })
        return
    }

    res.json(user.data);

}

module.exports = {
    getAllUser : getAllUser
}