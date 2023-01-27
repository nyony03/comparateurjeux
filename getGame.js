const axios = require("axios");
async function getGame(id, res){
    const gameList = await axios({
        method: 'get',
        url: 'https://testnode-811e.restdb.io/rest/jeux',
        headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });

    const game = gameList.data.filter((game) => game._id === id)

    if(!game){
        res.status(401).json({ error: 'Game not found.' })
        return
    }
    return game;
}

module.exports = {
    getGame : getGame,
}

