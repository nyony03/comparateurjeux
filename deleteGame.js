const axios = require("axios");

async function deleteGame(id){
    await axios({
        method: 'DELETE',
        url: `https://testnode-811e.restdb.io/rest/jeux/${id}`,
        headers:
            { 'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });
}

module.exports = {
    deleteGame: deleteGame,
}