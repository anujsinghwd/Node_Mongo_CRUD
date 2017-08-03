var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/databasename";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: "Valley 345" };
  var newvalues = {$set: {address: "Canyon 123"} };
  db.collection("collectionname").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 record updated");
    db.close();
  });
});
