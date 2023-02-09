const axios = require("axios");

async function createGame(req, res){
    const price = req.body.price
    const name = req.body.name
    const description = req.body.description
    const type = req.body.type
    const platform = req.body.platform
    const url = req.body.url

    let element;
    switch (!element) {
        case(price):
            res.status(401).json({ error: 'Price was not provided.' })
            return
        case(name):
            res.status(401).json({ error: 'Name was not provided.' })
            return
        case(description):
            res.status(401).json({ error: 'Description was not provided.' })
            return
        case(type):
            res.status(401).json({ error: 'Console was not provided.' })
            return
        case(platform):
            res.status(401).json({ error: 'Platform was not provided.' })
            return
        case(url):
            res.status(401).json({ error: 'Url was not provided.' })
            return
    }

    const game = {
        'price' : price,
        'name' : name,
        'description': description,
        'type' : type,
        'platform' : platform,
        'url': url
    }

    const NewGame = await axios({
        method: 'post',
        url: 'https://testnode-811e.restdb.io/rest/jeux',
        data: game,
        headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });

    if(!NewGame){
        res.status(401).json({ error: 'Game not found.' })
        return
    }

    return res.json(NewGame.data);
}

module.exports = {
    createGame: createGame,
}