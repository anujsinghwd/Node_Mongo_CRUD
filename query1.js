var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/databasename";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var query = { address: "Park Lane 38" };
    db.collection("collectionname").find(query).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    })
});