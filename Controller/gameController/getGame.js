const axios = require("axios");

async function getJeuBDD() {
    const gameList = await axios({
        method: 'get',
        url: 'https://testnode-811e.restdb.io/rest/jeux',
        headers:
            {
                'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json'
            },
    });
    return gameList;
}
async function getGameById(id, res){
    // autorisation accès vue
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080")

    const gameList = await getJeuBDD()
    const game = gameList.data.filter((game) => game._id === id)

    if(!game){
        res.status(401).json({ error: 'Game not found.' })
        return
    }

    res.json(game);
}

async function getGameByName(name, res){
    
    const gameList = await getJeuBDD();
    const game = gameList.data.filter((game) => game.name === name)

    if(!game){
        res.status(401).json({ error: 'Game not found.' })
        return
    }

    res.json(game);
}

module.exports = {
    getGame : getGameById,
    getGameByName: getGameByName
}

