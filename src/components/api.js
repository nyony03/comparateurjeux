const liste = [
    {
        id: 1,
        titre: "Hollow Knight",
        tag: "combat",
        description:
            "Choisissez votre destin dans Hollow Knight ! Une aventure épique et pleine d’action, qui vous plongera dans un vaste royaume en ruine peuplé d’insectes et de héros. Dans un monde en 2D classique, dessiné à la main. ",
        img:
            "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg?t=1667006028",
        video:
            "https://cdn.akamai.steamstatic.com/steam/apps/256927226/movie480_vp9.webm?t=1674829926"
    },

    {
        id: 2,
        titre: "Ori and the Will of the Wisps",
        tag: "combat",
        description:
            "Embarquez pour une nouvelle aventure dans un monde vaste et dépaysant où vous rencontrerez des ennemis gigantesques et des énigmes ardues dans votre quête pour révéler la destinée d'Ori. ",
        img:
            "https://cdn.akamai.steamstatic.com/steam/apps/1057090/header.jpg?t=1667504225",
        video:
            "https://cdn.akamai.steamstatic.com/steam/apps/256927226/movie480_vp9.webm?t=1674829926"
    },

    {
        id: 3,
        titre: "Marvel’s Spider-Man Remastered",
        tag: "combat",
        description:
            "Dans Marvel’s Spider-Man Remastered, les mondes de Peter Parker et de Spider-Man entrent en collision dans une histoire originale et riche en action. Incarnez un Peter Parker aguerri combattant le crime contre des ennemis emblématiques dans le New York de Marvel. ",
        img:
            "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg?t=1673999865",
        video:
            "https://cdn.akamai.steamstatic.com/steam/apps/256927226/movie480_vp9.webm?t=1674829926"
    },

    {
        id: 4,
        titre: "Gotham Knights",
        tag: "combat",
        description:
            "Il appartient maintenant à la Batman Family (Batgirl, Nightwing, Red Hood et Robin) de défendre Gotham City. ",
        img:
            "https://cdn.akamai.steamstatic.com/steam/apps/1496790/header.jpg?t=1669857306",
        video:
            "https://cdn.akamai.steamstatic.com/steam/apps/256927226/movie480_vp9.webm?t=1674829926"
    },

    {
        id: 5,
        titre: "Hogwarts Legacy : L'Héritage de Poudlard",
        tag: "combat",
        description:
            "Hogwarts Legacy : L'Héritage de Poudlard est un RPG d'action-aventure immersif en monde ouvert. Vous pouvez prendre le contrôle et vous retrouver au centre de votre propre aventure dans le Monde des sorciers. ",
        img:
            "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg?t=1675807143",
        video:
            "https://cdn.akamai.steamstatic.com/steam/apps/256927226/movie480_vp9.webm?t=1674829926"
    },

    {
        id: 6,
        titre: "The Witcher® 3: Wild Hunt",
        tag: "combat",
        description:
            " Vous incarnez Geralt de Riv, un tueur de monstres. Devant vous s'étend un continent en guerre, infesté de monstres, à explorer à votre guise. Votre contrat actuel ? Retrouver Ciri, l'enfant de la prophétie, une arme vivante capable de changer le monde. ",
        img:
            "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392",
        video:
            "https://cdn.akamai.steamstatic.com/steam/apps/256927226/movie480_vp9.webm?t=1674829926"
    }
];

function getList() {
    return liste;
}

function getJeu(id) {
    let Jeu = {};
    console.log(id);
    console.log(liste);

    liste.forEach((element) => {
        console.log(element.id.toString());

        if (element.id.toString() === id) {
            console.log(element.id);

            Jeu = element;
        }
    });
    return Jeu;
}

export default { getList, getJeu };
