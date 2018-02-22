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
    description: "King Johns Castle is a 13th century castle located on Kings Island in Ireland next to the river Shanon. The castle was built on the orders of King John in 1200. The castle is the visitor attraction right now.",
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
    comments: [{
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date(""),
        text: "Asdf"
    }],
    likers: [

    ],
    description: "Taaffes Castle is situated in the beautiful medieval town of Carlingford and is located what is now currently located at the centre of the Village. It was mostly likely to have been built at the start of the 16th century as a fortified townhouse and a trading depot , But when it was built it was most likely a Shoreline Merchant House where deliveries from the sea where stored and collected. Now try to imagine the original shore line coming to the base of the building. It must have been very convenient for the merchant who lived here, The merchants could have loaded or unload their wares on or off a small boat which would bring the goods to and from a larger ship anchored in deeper waters out in the harbour. This tower house was a very popular style of building amongst the merchant and upper classes of towns all around Ireland, it was easily defended and its height meant that you could have a lot of living space in a small area, it allowed for the construction of substantial buildings on small burgage plots. But Taaffes Castle had more space than most because at the corner of the building there is a number of projecting stones which are the remains of a brawn wall. Brawn walls enclosed an open area around the tower house which usually contained a garden and wooden buildings and outhouses. They are normally found around similar buildings in the country, However it is quite unusual to find one of these in an urban setting.",
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
    description: "The magnificent Proleek Portal Tomb, situated in the grounds of Ballymascanlon Hotel on the legendary Cooley Peninsula, is one of the finest examples of its kind in Ireland. Portal tombs have two tall stones at the front (portal stones) and a smaller stone at the back supporting a large capstone. A portal tomb resembles a giants table and is sometimes called a dolmen, which comes from the Breton word tolmen meaning stone table. Proleek Portal Tomb is about 3m high and has a huge capstone weighing approximately 35 tons. Legend says that a wish will be granted to anyone who can throw a pebble on its capstone so that it stays there. The two front portal stones are 2m high. Known as the Giants Load, it is believed that it was carried to Ireland by a Scottish giant named Parrah Boug McShagean (who is said to be buried nearby).",
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
    picture: ["/images/Carlingford/oyster_festival_01.jpg"],
    comments: [{
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
    description: "The Carlingford Oyster Festival offers a four day fun-filled festival for the whole family and is packed with traditional childrens activities including Magic Show, Face Painting, the ever popular Teddy Bears Picnic, Free Kayaking in the Harbour, Childrens Funfair & Bouncing Castles and much, much more!",
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

var festival_of_music = {
    _id: ObjectId(),
    name: "Festival of Music",
    nature: "event",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/Krakow/festival_of_music_01.jpg"],
    comments: [],
    likers: [],
    description: "This festival of classical music has the reputation of being able to lure venerable names on the world scene to perform in Cracow, often at the most evocative historic venues in the city.",
    url: "http://www.polandculinaryvacations.com/blog/culinary-cultural-events-in-poland-2013-calendar/",
    dateStart: new Date('2018-8-15'),
    dateEnd: new Date('2018-8-31')
};

var st_marys_basilica = {
    _id: ObjectId(),
    name: "St. Mary's Basilica",
    nature: "place",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/Krakow/festival_of_music_01.jpg"],
    comments: [],
    likers: [],
    description: "This festival of classical music has the reputation of being able to lure venerable names on the world scene to perform in Cracow, often at the most evocative historic venues in the city. ",
    url: "http://www.polandculinaryvacations.com/blog/culinary-cultural-events-in-poland-2013-calendar/",
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
db.activities.insert([granet, saintSauveur, festival, king_johns_castle, taaffes_castle, proleek_dolmen, oyster_festival, wawel_castle, st_marys_basilica, pierogi_festival, festival_of_music, fortress_of_carcassonne, festival_de_carcassonne]);


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
    description: "Carlingford is a coastal town and civil parish in northern County Louth, Ireland. It is situated on the southern shore of Carlingford Lough with Slieve Foy as a backdrop, sometimes known as Carlingford Mountain, It is the main town on the Cooley Peninsula. Located on the R176/R173 roads between Greenore and Omeath village, Carlingford is approximately 27 km north east (by road) from Dundalk (15.6 km directly), 90 km north of Dublin and 11 km south of the border with Northern Ireland. Carlingford won the Irish Tidy Towns Competition in 1988. Carlingford still retains its medieval layout noticeable by the narrow lanes and small streets. Tholsel Street is where the last of the medieval walled towns gates can still be seen, called The Tholsel which apparently was also used as a gaol, on Tholsel Street itself there is still a 16th-century Town House known as the Mint.",
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
        _id: st_marys_basilica._id,
        name: st_marys_basilica.name,
        nature: st_marys_basilica.nature,
        picture: st_marys_basilica.picture,
    },{
        _id: pierogi_festival._id,
        name: pierogi_festival.name,
        nature: pierogi_festival.nature,
        picture: pierogi_festival.picture,
        dateStart: pierogi_festival.dateStart,
        dateEnd: pierogi_festival.dateEnd
    },{
        _id: festival_of_music._id,
        name: festival_of_music.name,
        nature: festival_of_music.nature,
        picture: festival_of_music.picture,
        dateStart: festival_of_music.dateStart,
        dateEnd: festival_of_music.dateEnd
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
}

db.cities.drop();
db.cities.insert([carlingford, krakow, carcassonne, aix]);
