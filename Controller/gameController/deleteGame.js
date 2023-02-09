const axios = require("axios");

async function deleteGame(id){
    const response = await axios({
        method: 'DELETE',
        url: `https://testnode-811e.restdb.io/rest/jeux/${id}`,
        headers:
            { 'cache-control': 'no-cache',
                'x-apikey': '337d6d3d1cea8098fc893c62e78a80b48e954',
                'content-type': 'application/json' },
    });

    if( !response ) {
        res.status(401).json({
            status: 'error',
            message: 'Erreur dans l\'exécution de la requête',
        }).send();
    } else {
        res.status(200).json({
            status: 'success',
            message: 'Le jeu a été supprimé avec succès',
        }).send();
    }
}
module.exports = {
    deleteGame: deleteGame,
}