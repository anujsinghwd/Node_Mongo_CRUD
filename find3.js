var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/databasename";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("collectionname").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[4].name + '-' + result[4].address);
    db.close();
  });
});