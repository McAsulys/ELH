// we use ES5 code because current mongo versions are not compatible with ES6

// *** users
var derek = {
    _id: ObjectId(),
    email: "derek@dkit.ie"
};
var gilles = {
    _id: ObjectId(),
    email: "gilles@iut.fr"
};
var aaron = {
    _id: ObjectId(),
    email: "aaron@gmail.ie"
};
db.users.drop();
db.users.insert([derek, gilles]);


// *** activities
var granet = {
    _id: ObjectId(),
    name: "musee Granet",
    nature: "place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "I love this place !!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "Le musee Granet presente pres de 600 oeuvres de peinture, sculpture, pieces archeologiques. Peintures hollandaises, italiennes, francaises de diverses epoques",
    url: "http://museegranet-aixenprovence.fr"
};
var saintSauveur = {
    _id: ObjectId(),
    name: "cathedral saint Sauveur",
    nature: "place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Aix/sauveur1.jpg", "/images/Aix/sauveur2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date(),
        text: "great"
    }],
    likers: [],
    description: "no description"
};
var festival = {
    _id: ObjectId(),
    name: "festival de musique",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Aix/festival1.png", "/images/Aix/festival1.jpg", "/images/Aix/festival2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date(),
        text: "Awful music"
    }],
    likers: [],
    description: "Fort de son succes, le Festival d'Aix accueille un public non seulement local, mais aussi national, et un grand nombre de spectateurs et de journalistes venus du monde entier.",
    url: "http://festival-aix.com/en",
    dateStart: new Date('2016-6-15'),
    dateEnd: new Date('2016-7-10')
};


var king_johns_castle = {
    _id: ObjectId(),
    name: "King John's Castle",
    nature: "place",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    pictures: ["images/Carlingford/king_johns_castle.jpg"],
    comments: [

    ],
    likers: [

    ],
    description: "",
    url: "http://www.carlingford.ie/"
};

var taaffes_castle = {
    _id: ObjectId(),
    name: "Taaffe's Castle",
    nature: "place",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    pictures: ["images/Carlingford/taaffes_castle.jpg"],
    comments: [

    ],
    likers: [

    ],
    description: "",
    url: "http://www.carlingford.ie/"
};

var proleek_dolmen = {
    _id: ObjectId(),
    name: "Proleek Dolmen",
    nature: "place",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    pictures: ["images/Carlingford/proleek_dolmen.jpg"],
    comments: [

    ],
    likers: [

    ],
    description: "",
    url: "http://www.carlingford.ie/"
};

var oyster_festival = {
    _id: ObjectId(),
    name: "Oyster Festival",
    nature: "event",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    pictures: ["/images/Carlingford/oyster_festival_01.jpg", "/images/Carlingford/oyster_festival_02.jpg"],
    comments: [{
        user: {
            _id: aaron._id,
            email: aaron.email
        },
        date: new Date("2018"),
        text: "Nice place"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "",
    url: "http://www.carlingford.ie/",
    dateStart: new Date('2016-6-15'),
    dateEnd: new Date('2016-7-10')
};

var wawel_castle = {
    _id: ObjectId(),
    name: "Wawel Castle",
    nature: "place",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/Krakow/wawel_castle_01.jpg"],
    comments: [],
    likers: [],
    description: "Wawel Castle is a castle residency, which is situated in the center of Krakow. This castle was built for King Casimir III the Great. It consists of a few buildings that are situated around the main Italian-styled courtyard. This castle represents almost all European architectural styles, that is the reason why it belongs to UNESCO World Heritage Site as the part of historic entre of Krakow.",
    url: "http://www.wawel.krakow.pl/en"
};

var pierogi_festival = {
    _id: ObjectId(),
    name: "Pierogi Festival",
    nature: "event",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/Krakow/pierogi_festival_01.jpg"],
    comments: [],
    likers: [],
    description: "Pierogi are the typical part of the Polish diet. These savories are variously filled with cheese or meat and available nearly everywhere. But the ones at the Pierogi Festival are the best of the best. This festival takes place on 15 th of August. Lots of tourists come there to taste the true traditionally cooked pierogi.",
    url: "http://www.polandculinaryvacations.com/blog/culinary-cultural-events-in-poland-2013-calendar/",
    dateStart: new Date('2018-8-11'),
    dateEnd: new Date('2018-8-15')
};

db.activities.drop();
db.activities.insert([granet, saintSauveur, festival, king_johns_castle, taaffes_castle, proleek_dolmen, oyster_festival, wawel_castle, pierogi_festival]);


// **** cities
var aix = {
    _id: ObjectId(),
    name: "Aix en Provence",
    coordinates: {
        long: "43.5263",
        lat: "5.4454"
    },
    description: "Protegee par la Montagne Sainte Victoire qui culmine à  1.011 m, Aix est entouree d'une campagne richement preservee avec d'authentiques bastides provencales entourees de jardins à la francaise. " +
    "Son nom vient des sources thermales decouvertes à la fondation de la ville en 123 avant JC par les romains. <br />" +
    "Aix en Provence etait la capitale de la Provence au XVeme siecle : marchands prosperes et notables firent de la ville la Florence provencale que l'on connait aujourd'hui. " +
    "Demeures bourgeoises, placettes fleuries, hotels particuliers, fontaines anciennes, ruelles ombragees... toutes les images de la Provence noble des XVII et XVIII sont rassemblees à Aix. <br />",
    picture: '/images/Aix/aix.jpg',
    activities: [{
        _id: granet._id,
        name: granet.name,
        nature: granet.nature,
        picture: granet.pictures[0]
    }, {
        _id: saintSauveur._id,
        name: saintSauveur.name,
        nature: saintSauveur.nature,
        picture: saintSauveur.pictures[0]
    }, {
        _id: festival._id,
        name: festival.name,
        nature: festival.nature,
        picture: festival.pictures[0]
    }]
};
var boulogne = {
    _id: ObjectId(),
    name: 'Boulogne sur mer',
    coordinates: {
        long: "50.7264",
        lat: "1.6147"
    },
    description: "",
    picture: '/images/Boulogne/centre.jpg',
    activities: []
};

var carlingford = {
    _id: ObjectId(),
    name: "Carlingford",
    coordinates: {
        long: "54.0469",
        lat: "6.1902"
    },
    description: "",
    picture: "/images/Carlingford/carlingford.jpg",
    activities: [{
        _id: king_johns_castle._id,
        name: king_johns_castle.name,
        nature: king_johns_castle.nature,
        picture: king_johns_castle.pictures[0]
    }, {
        _id: taaffes_castle._id,
        name: taaffes_castle.name,
        nature: taaffes_castle.nature,
        picture: taaffes_castle.pictures[0]
    }, {
        _id: proleek_dolmen._id,
        name: proleek_dolmen.name,
        nature: proleek_dolmen.nature,
        picture: proleek_dolmen.pictures[0]
    }, {
        _id: oyster_festival._id,
        name: oyster_festival.name,
        nature: oyster_festival.nature,
        picture: oyster_festival.pictures[0],
        dateStart: oyster_festival.dateStart,
        dateEnd: oyster_festival.dateEnd
    }]
};

var krakow = {
    _id: ObjectId(),
    name: "Krakow",
    coordinates: {
        long: "50.0647",
        lat: "19.9450"
    },
    description: "Krakow is a large, beautiful city in Poland that was " +
     "founded during the 7th century. It is situated on the banks of Vistula River " +
     "and is one of the oldest cities in Poland. After the German invasion " +
     " at the start of World War II, it became the capital of the German " +
     "General Government. After WWII, Krakow was returned to Poland and " +
     "became the native city of first Slavic Pope ever. He was the first non " +
     "Italian born Pope in 455 years. In 1978 UNESCO included the entire Old " +
     "Town to the World Heritage List.",
    picture: "/images/Krakow/krakow_01.jpg",
    activities: [{
        _id: wawel_castle._id,
        name: wawel_castle.name,
        nature: wawel_castle.nature,
        picture: wawel_castle.picture
    },{
        _id: pierogi_festival._id,
        name: pierogi_festival.name,
        nature: pierogi_festival.nature,
        picture: pierogi_festival.picture,
        dateStart: pierogi_festival.dateStart,
        dateEnd: pierogi_festival.dateEnd
    }]
};

db.cities.drop();
db.cities.insert([aix, boulogne, carlingford, krakow]);
