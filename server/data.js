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
    picture: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
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
    picture: ["/images/Aix/sauveur1.jpg", "/images/Aix/sauveur2.jpg"],
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
    picture: ["/images/Aix/festival1.png", "/images/Aix/festival1.jpg", "/images/Aix/festival2.jpg"],
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
    nature: "castle",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["images/Carlingford/king_johns_castle.jpg"],
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
    picture: ["images/Carlingford/taaffes_castle.jpg"],
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
    picture: ["images/Carlingford/proleek_dolmen.jpg"],
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
    picture: ["/images/Carlingford/oyster_festival_01.jpg", "/images/Carlingford/oyster_festival_02.jpg"],
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
    nature: "castle",
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

var fortress_of_carcassonne = {
    _id: ObjectId(),
    name: "Fortress of Carcassonne",
    nature: "castle",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/Carcassonne/fortress_of_carcassonne_01.jpg"],
    comments: [],
    likers: [],
    description: "Fortress of Carcassonne is a medieval citadel located near the French city called Carcassonne. It is located on a hill on the right bank of the river Aude. This citadel has 3 kilometer long double surrounding walls with 52 towers. This fortress is approximately 2500 years old and has been taken by Romans, Visigoths, Saracens and Crusaders. Each conqueror added its own modifications to the castle that is why the castle has so many fortifications.",
    url: "http://www.carcassonne.org/",
};

var festival_de_carcassonne = {
    _id: ObjectId(),
    name: "Festival de Carcassonne",
    nature: "event",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/Carcassonne/festival_de_carcassonne_01.jpg"],
    comments: [],
    likers: [],
    description: "This festival starts in July and takes place in the Carcassonne fortress. It lasts for three weeks ant during this festival on the stage that is situated in the fortress the are dance, music and theatre performances. This festival is very popular among the tourists and French people.",
    url: "http://www.festivaldecarcassonne.fr/",
    dateStart: new Date('2018-7-15'),
    dateEnd: new Date('2018-8-31')
};

db.activities.drop();
db.activities.insert([granet, saintSauveur, festival, king_johns_castle, taaffes_castle, proleek_dolmen, oyster_festival, wawel_castle, pierogi_festival, fortress_of_carcassonne, festival_de_carcassonne]);


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
        picture: granet.picture[0]
    }, {
        _id: saintSauveur._id,
        name: saintSauveur.name,
        nature: saintSauveur.nature,
        picture: saintSauveur.picture[0]
    }, {
        _id: festival._id,
        name: festival.name,
        nature: festival.nature,
        picture: festival.picture[0]
    }]
};

//var boulogne = {
//    _id: ObjectId(),
//    name: 'Boulogne sur mer',
//    coordinates: {
//        long: "50.7264",
//        lat: "1.6147"
//    },
//    description: "",
//    picture: '/images/Boulogne/centre.jpg',
//    activities: []
//};

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
        picture: king_johns_castle.picture[0]
    }, {
        _id: taaffes_castle._id,
        name: taaffes_castle.name,
        nature: taaffes_castle.nature,
        picture: taaffes_castle.picture[0]
    }, {
        _id: proleek_dolmen._id,
        name: proleek_dolmen.name,
        nature: proleek_dolmen.nature,
        picture: proleek_dolmen.picture[0]
    }, {
        _id: oyster_festival._id,
        name: oyster_festival.name,
        nature: oyster_festival.nature,
        picture: oyster_festival.picture[0],
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

var carcassonne = {
    _id: ObjectId(),
    name: "Carcassonne",
    coordinates: {
        long: "43.2122",
        lat: "2.3537"
    },
    description: "Carcassonne is a fortified town in France. The castle itself is inhabited since Neolithic period. Carcassonne is located between historic trade routes that link the Atlantic to Mediterranean sea, that is why it was very strategically important that is why it was always occupied by different medieval nations. The city Carcassonne is famous for the medieval fortress that was restored in 1853 and added to the UNESCO list of World Heritage Sites in 1997.",
    picture: "/images/Carcassonne/carcassonne_01.jpg",
    activities: [{
        _id: fortress_of_carcassonne._id,
        name: fortress_of_carcassonne.name,
        nature: fortress_of_carcassonne.nature,
        picture: fortress_of_carcassonne.picture
    },{
        _id: festival_de_carcassonne._id,
        name: festival_de_carcassonne.name,
        nature: festival_de_carcassonne.nature,
        picture: festival_de_carcassonne.picture,
        dateStart: festival_de_carcassonne.dateStart,
        dateEnd: festival_de_carcassonne.dateEnd
    }]
};

db.cities.drop();
db.cities.insert([carlingford, krakow, carcassonne, aix]);
