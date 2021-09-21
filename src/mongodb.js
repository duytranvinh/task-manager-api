// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = "task-manager";

// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log("Unable connect to database");
    }

    const db = client.db(databaseName);

    db.collection("tasks").deleteOne({
            description: "Read books",
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
});

