const axios = require("axios");
async function gameList(res){
    const gameList = await axios({
        method: 'get',
        url: 'https://testnode-811e.restdb.io/rest/jeux',
        headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });

    if(!gameList){
        res.status(401).json({ error: 'Game not found.' })
        return
    }
    return gameList.data;
}

module.exports = {
    gameList : gameList,
}

