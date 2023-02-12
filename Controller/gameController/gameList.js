const axios = require("axios");
async function gameList(res){
    // autorisation accès vue
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080")

    const gameList = await axios({
        method: 'get',
        url: 'https://testnode-811e.restdb.io/rest/jeux',
        headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });

    if(!gameList){
        res.status(401).json({ error: 'No game found in the database.' })
        return
    }

    res.json(gameList.data);
}

module.exports = {
    gameList : gameList,
}

