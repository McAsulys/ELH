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

app.use((req,res,next)=>{
  console.log("ok");
  next();
})
app.get('/cities', (req, res) => {
    console.log("coucou");
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

app.post('/images', imagesUpload(
    './static/' + IMAGES,
    HTTP_SERVER_PORT_IMAGES
));
