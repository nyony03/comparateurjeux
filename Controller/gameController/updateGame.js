const axios = require('axios')

async function updateGame(id, newData, res){

    const gameUpdate = await axios({
        method: 'PUT',
        url: `https://testnode-811e.restdb.io/rest/jeux/${id}`,
        headers:
            { 'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
        data: newData,
        json: true
    })

    if(!gameUpdate){
        res.status(401).json({ error: 'problem update game.' })
    }

    res.json(gameUpdate.data)

}

module.exports = {
    updateGame: updateGame,
}