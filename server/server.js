import express from 'express';
import corsPrefetch from 'cors-prefetch-middleware';
import imagesUpload from 'images-upload-middleware';
import {MongoClient, ObjectID} from 'mongodb';
import bodyParser from 'body-parser';

import {SERVER, PORT, HTTP_SERVER_PORT, HTTP_SERVER_PORT_IMAGES, IMAGES} from './constants';


const app = express();
app.use(express.static(__dirname + '/../static'));
app.use(bodyParser.json());
app.use(corsPrefetch);

let db; // global variable for getting an access to the database
MongoClient.connect('mongodb://' + SERVER)
    .then(connection => {
        db = connection.db('dbCities');
        app.listen(PORT, () => console.log('Server Listening on Port 9090'));
    })
    .catch(error => console.log('ERROR:', error));


app.get('/cities', (req, res) => {
    db.collection('cities').find().toArray() // Ask to the db object to find all cities
    .then(cities => res.json(cities))        // Transform in json and send them on the network
    .catch(error => {                        // Bad news : an error!
        console.log(error);
        res.status(500).json({message: `Internal Server Error : ${error}`});
    });
});

app.get('/cities/:id', (req, res) => {
    console.log("REQ ", req.params.id);
    db.collection('cities').findOne({"_id": ObjectID(req.params.id)})
        .then(city => res.json(city))
        .catch(error => {
            console.log(error);
            res.status(404).json({message: `No such city with id : ${req.params.id}`});
        });
});

app.get('/activity/:id', (req, res) => {
    console.log("REQ_ACTIVITY ", req.params.id);
    db.collection('activities').findOne({"_id": ObjectID(req.params.id)})
        .then(activity => res.json(activity))
        .catch(error => {
            console.log(error);
            res.status(404).json({message: `No such activity with id : ${req.params.id}`});
        });
});
     

app.post('/images', imagesUpload(
    './static/' + IMAGES,
    HTTP_SERVER_PORT_IMAGES
));

app.post('/newCity', (req, res) => {
    const c = {
        name: req.body.cityName,
        picture : '/images/Aix/aix.jpg',
        coordinates: {
            lat: req.body.cityLatitude,
            long: req.body.cityLongitude
        },
        description: "",
        activities: []
    };
    
    db.collection('cities').insertOne(c)
        .then(result => res.json(result.insertedId))
        .catch(error => {
            console.log(error);
            res.status(500).json({message: `Internal Server Error: ${error}`});
        });
});

app.post('/newComment', (req, res) => {
    const c = {
        text: req.body.comment,
        activity_id: req.body.activity_id,
        date: new Date("2018"),
        user: {
            _id: "aaron",
            email: "aaron@gmail.com"
        }
    };
    
    console.log("commemt",c);
    
    db.collection('activities').findOne({"_id": ObjectID(req.body.activity_id)})
        .then(result => {
            console.log("res", result);
            c._id = result._id;
            db.collection('activities').updateOne({_id: ObjectID(req.body.activity_id)}, {$push: {comments: c}});
            res.json(result._id);
        });
});

app.post('/newPlace', (req, res) => {
    console.log("Adding Place");
    const c = {
        name: req.body.name,
        nature: "place",
        editor: [],
        picture: req.body.picture,
        comments: [],
        likers: [],
        description: req.body.description,
        url: req.body.url
    };
    
    db.collection('activities').insertOne(c)
        .then(result => {
            c._id = result.insertedId;
            db.collection('cities').updateOne({_id: ObjectID(req.body.city_id)}, {$push: {activities: c}});
            res.json(result.insertedId);
        })
        .catch(error => {
            res.status(500).json({message: `Internal Server Error: ${error}`});
        });
});

app.post('/newEvent', (req, res) => {
    console.log("Adding Place");
    const c = {
        name: req.body.name,
        nature: req.body.nature,
        editor: [],
        picture: req.body.picture,
        comments: [],
        likers: [],
        description: req.body.description,
        url: req.body.url,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    };
    
    db.collection('activities').insertOne(c)
        .then(result => {
            c._id = result.insertedId;
            db.collection('cities').updateOne({_id: ObjectID(req.body.city_id)}, {$push: {activities: c}});
            res.json(result.insertedId);
        })
        .catch(error => {
            res.status(500).json({message: `Internal Server Error: ${error}`});
        });
});
