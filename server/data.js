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
    description: "Carlingford Castle's west wing was built in the late 12th century by Hugh de Lacy, Lord of Meath shortly after the Norman invasion of Ireland. It acquired the name King John's Castle after King John, Lord of Ireland, supposedly stayed there for three days in 1210, during his second expedition, when he invaded Ulster to apprehend Hugh de Lacy, 1st Earl of Ulster. Local myth claims that he began to draft Magna Carta (agreed in 1215) at Carlingford.[2] Other accounts associate its construction with Ralph Pepper in 1204.[3] The east wing of the castle was added c. 1261. In 1326 the castle was committed to Geoffrey le Blound. Edmond Loundres was constable in 1388, Stephen Gernon in 1400. Henry MacShane O'Neill attempted to take the castle in 1596.",
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
    picture: ["/images/Krakow/st_marys_basilica_01.jpg"],
    comments: [],
    likers: [],
    description: "Jealousy, cruelty and pain are part of the legend around the Saint Marys Basilica. Two brothers would have been in charge of its construction, but each one attempted to build a taller and more beautiful tower than the others one. When one of them realized that  he was less advanced, he became so wrathful that he killed his brother. Regaining control of himself, he saw what he did and took his own life. This story would be the reason why the two towers of the basilica are asymmetric, and with different architectural styles : the two brothers died so the towers couldnt have been finished then.",
    url: "http://www.polandculinaryvacations.com/blog/culinary-cultural-events-in-poland-2013-calendar/"
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
    url: "http://www.carcassonne.org/"
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
    description: "What could be better for the Carcassonne fortress than hosting a big arts festival ? The city took advantage of its particular architecture and huge superficy to guest many different artists of many different arts. For three weeks in July, festival goers will be able to watch to performances in a medieval environment. A good opportunity to enjoy the place, and take many pictures !",
    url: "http://www.festivaldecarcassonne.fr/",
    dateStart: new Date('2018-7-15'),
    dateEnd: new Date('2018-8-31')
};

var museum_of_chivalry = {
    _id: ObjectId(),
    name: "Museum of chivalry",
    nature: "place",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/Carcassonne/meuschiv.jpg"],
    comments: [],
    likers: [],
    description: "Gilles Alessandri, a very passionate and cultivated person, will welcome you to his consistent collection of middle-aged weapons, tapestry, coins and illumination. The Museum is a complete following to the footsteps of knights, so don't be surprised if you will be dubbed. For the most temerous people, crossing the swords with the manager is even possible. But be aware, he is a real professionnal.",
    url: "https://www.inspirock.com/france/carcassonne-center/maison-de-la-chevalerie-la-cite-a725440545",
    dateStart: new Date('2018-7-15'),
    dateEnd: new Date('2018-8-31')
};
var museum_of_inquisition = {
    _id: ObjectId(),
    name: "Museum of inquisition",
    nature: "place",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/Carcassonne/meusinq.jpg"],
    comments: [],
    likers: [],
    description: "Gilles Alessandri, a very passionate and cultivated person, will welcome you to his consistent collection of middle-aged weapons, tapestry, coins and illumination. The Museum is a complete following to the footsteps of knights, so don't be surprised if you will be dubbed. For the most temerous people, crossing the swords with the manager is even possible. But be aware, he is a real professionnal. The Museum hosts plenty of torture instruments and installations too, dated from the XIIth century to the French Revolution.",
    url: "http://www.musee-inquisition-carcassonne.com/",
    dateStart: new Date('2018-7-15'),
    dateEnd: new Date('2018-8-31')
};
var proposal_stones = {
    _id: ObjectId(),
    name: "Proposal stones",
    nature: "place",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/Carlingford/proposal-stones.jpg"],
    comments: [],
    likers: [],
    description: "Across from the sea, you could walk down Proposal Stones for a romantic atmosphere.  Indeed this place has always been where couples stopped at and made their proposal, so that they would have good luck thanks to the fairies. Even the Church could not have stopped this paian tradition whereas it dismantled a huge part of it and hid it as well in the 18th century.",
    url: "https://www.irelandsancienteast.com/discover/stories/short-stories/proposal-stones",
    dateStart: new Date('2018-7-15'),
    dateEnd: new Date('2018-8-31')
};
var Leprechaun_and_Fairy_Underground_Cavern = {
    _id: ObjectId(),
    name: "Leprechaun and Fairy Underground Cavern",
    nature: "place",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/Carlingford/cavern-small.jpg"],
    comments: [],
    likers: [],
    description: "Across from the sea, you could walk down Proposal Stones for a romantic atmosphere.  Indeed this place has always been where couples stopped at and made their proposal, so that they would have good luck thanks to the fairies. Even the Church could not have stopped this paian tradition whereas it dismantled a huge part of it and hid it as well in the 18th century.",
    url: "http://www.thelastleprechaunsofireland.com/",
    dateStart: new Date('2018-7-15'),
    dateEnd: new Date('2018-8-31')
};
var Fire_breathing_Monument_of_the_Wawel_dragon = {
    _id: ObjectId(),
    name: "Fire breathing Monument of the Wawel dragon",
    nature: "place",
    editor: {
        _id: aaron._id,
        email: aaron.email
    },
    picture: ["/images/krakow/dragon.jpg"],
    comments: [],
    likers: [],
    description: "Once upon a time in Poland near the Wawel Hill appeared a terrible dragon. People were trebling with fear when they heard him roar. There was no weapon that could at least harm the dragon, so there became less and less of knights that tried to conquer the beast. Time passed the dragon laid waste to the grounds of Krakow, until there appeared a shoemaker that asked a king to give him lambskin, some Sulphur and mustard seed. He took the lambskin, filled it with Sulphur, pitch and mustard seed, and skillfully sewed up the hole in lambs belly. The next morning he went to the place where the dragon lived and left his sheep near that place and quickly hid in the bushes. The dragon woke up and ate a sheep and his mouth became so hot that he started drinking a lot, and exploded of the amount of water he had drank.",
    url: "https://www.thevintagenews.com/2016/09/29/wawel-dragon-statue-krakow-breathes-actual-fire-demand-text-message-received/",
    dateStart: new Date('2018-7-15'),
    dateEnd: new Date('2018-8-31')
};
db.activities.drop();
db.activities.insert([granet, saintSauveur, festival, king_johns_castle, taaffes_castle, proleek_dolmen, oyster_festival, wawel_castle, st_marys_basilica, pierogi_festival, festival_of_music, fortress_of_carcassonne, festival_de_carcassonne,museum_of_chivalry,museum_of_inquisition,proposal_stones,Leprechaun_and_Fairy_Underground_Cavern,Fire_breathing_Monument_of_the_Wawel_dragon]);


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
        picture: granet.picture[0],
        description: granet.description
    }, {
        _id: saintSauveur._id,
        name: saintSauveur.name,
        nature: saintSauveur.nature,
        picture: saintSauveur.picture[0],
        description: saintSauveur.description
    }, {
        _id: festival._id,
        name: festival.name,
        nature: festival.nature,
        picture: festival.picture[0],
        description: saintSauveur.description
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
    description: "Carlingford is probably the most typical irish land. Full of castles and leprauchaun, walking there will lead you to colorful streets and a beautiful bay. The harbour host the King John's Castle, a massive medieval construction that represents perfectly anglo-saxon style. The city has many lovely pathes, so you could explore it and perhaps even find some of the last leprauchauns of the country.",
    picture: "/images/Carlingford/carlingford.jpg",
    activities: [{
        _id: king_johns_castle._id,
        name: king_johns_castle.name,
        nature: king_johns_castle.nature,
        picture: king_johns_castle.picture[0],
        description: king_johns_castle.description
    }, {
        _id: taaffes_castle._id,
        name: taaffes_castle.name,
        nature: taaffes_castle.nature,
        picture: taaffes_castle.picture[0],
        description: taaffes_castle.description
    }, {
        _id: proleek_dolmen._id,
        name: proleek_dolmen.name,
        nature: proleek_dolmen.nature,
        picture: proleek_dolmen.picture[0],
        description: proleek_dolmen.description
    }, {
        _id: oyster_festival._id,
        name: oyster_festival.name,
        nature: oyster_festival.nature,
        picture: oyster_festival.picture[0],
        dateStart: oyster_festival.dateStart,
        dateEnd: oyster_festival.dateEnd,
        description: oyster_festival.description
       
    }, {
        _id: proposal_stones._id,
        name: proposal_stones.name,
        nature: proposal_stones.nature,
        picture: proposal_stones.picture[0],
        description: proposal_stones.description
    }, {
        _id: Leprechaun_and_Fairy_Underground_Cavern._id,
        name: Leprechaun_and_Fairy_Underground_Cavern.name,
        nature: Leprechaun_and_Fairy_Underground_Cavern.nature,
        picture: Leprechaun_and_Fairy_Underground_Cavern.picture[0],
        description: Leprechaun_and_Fairy_Underground_Cavern.description
    }
]
};

var krakow = {
    _id: ObjectId(),
    name: "Krakow",
    coordinates: {
        long: "50.0647",
        lat: "19.9450"
    },
    description: "Krakow is a beautiful big city in Poland that was found in 7th century. It is situated on the banks of Vistula river. It is one of the oldest cities in Poland. After German invasion at the beginning of the word war II it became the capital of Germanys General Government. After the world war II Krakow was returned to Poland and became the native city of first Slavic pope ever, and first pope not from Italy in 455 years. In 1978 UNESCO included the entire Old Town to the World Heritage List.",
    picture: "/images/Krakow/krakow_01.jpg",
    activities: [{
        _id: wawel_castle._id,
        name: wawel_castle.name,
        nature: wawel_castle.nature,
        picture: wawel_castle.picture,
        description: wawel_castle.description
    },{
        _id: st_marys_basilica._id,
        name: st_marys_basilica.name,
        nature: st_marys_basilica.nature,
        picture: st_marys_basilica.picture,
        description: st_marys_basilica.description
    },{
        _id: pierogi_festival._id,
        name: pierogi_festival.name,
        nature: pierogi_festival.nature,
        picture: pierogi_festival.picture,
        dateStart: pierogi_festival.dateStart,
        dateEnd: pierogi_festival.dateEnd,
        description: pierogi_festival.description
    },
    {
        _id: Fire_breathing_Monument_of_the_Wawel_dragon._id,
        name: Fire_breathing_Monument_of_the_Wawel_dragon.name,
        nature: Fire_breathing_Monument_of_the_Wawel_dragon.nature,
        picture: Fire_breathing_Monument_of_the_Wawel_dragon.picture,
        dateStart: Fire_breathing_Monument_of_the_Wawel_dragon.dateStart,
        dateEnd: Fire_breathing_Monument_of_the_Wawel_dragon.dateEnd,
        description: Fire_breathing_Monument_of_the_Wawel_dragon.description
    },
    {
        _id: festival_of_music._id,
        name: festival_of_music.name,
        nature: festival_of_music.nature,
        picture: festival_of_music.picture,
        dateStart: festival_of_music.dateStart,
        dateEnd: festival_of_music.dateEnd,
        description: festival_of_music.description
    }]
};

var carcassonne = {
    _id: ObjectId(),
    name: "Carcassonne",
    coordinates: {
        long: "43.2122",
        lat: "2.3537"
    },
    description: "Carcassonne is a fortified town in France. The castle itself is inhabited since Neolithic period. Carcassonne is located between historic trade routes that link the Atlantic to Mediterranean sea, that is why it was very strategically important so that many medieval nations would fight for it. The city Carcassonne is famous for the medieval fortress that was restored in 1853 and added to the UNESCO list of World Heritage Sites in 1997.",
    picture: "/images/Carcassonne/carcassonne_01.jpg",
    activities: [{
        _id: fortress_of_carcassonne._id,
        name: fortress_of_carcassonne.name,
        nature: fortress_of_carcassonne.nature,
        picture: fortress_of_carcassonne.picture,
        description: fortress_of_carcassonne.description
    },{
        _id: festival_de_carcassonne._id,
        name: festival_de_carcassonne.name,
        nature: festival_de_carcassonne.nature,
        picture: festival_de_carcassonne.picture,
        dateStart: festival_de_carcassonne.dateStart,
        dateEnd: festival_de_carcassonne.dateEnd,
        description: fortress_of_carcassonne.description
    },
    {
        _id: museum_of_chivalry._id,
        name: museum_of_chivalry.name,
        nature: museum_of_chivalry.nature,
        picture: museum_of_chivalry.picture,
        dateStart: museum_of_chivalry.dateStart,
        dateEnd: festival_de_carcassonne.dateEnd,
        description: museum_of_chivalry.description
    },
    {
        _id: museum_of_inquisition._id,
        name: museum_of_inquisition.name,
        nature: museum_of_inquisition.nature,
        picture: museum_of_inquisition.picture,
        dateStart: museum_of_inquisition.dateStart,
        dateEnd: museum_of_inquisition.dateEnd,
        description: museum_of_inquisition.description
    }
]
};

db.cities.drop();
db.cities.insert([carlingford, krakow, carcassonne, aix]);
