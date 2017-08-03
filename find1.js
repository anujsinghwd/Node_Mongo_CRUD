var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/databasename";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("collectionname").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});