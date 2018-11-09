var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

var dbName = 'web1807';

var collection = 'student';

mongoClient.connect(url,function(err,client){
  if(err){
    console.log(err);
    return;
  }
  var db = client.db(dbName);
  var coll = db.collection(collection);

/*****************  增   *****************/
/*   coll.insertOne({id:107,name:'赵刚',age:27},function(err,result){
    if(err){
      console.log(err);
      return;
    }
    console.log(result);
    client.close();
  }); */

/*****************  删   *****************/
/*   coll.deleteOne({id:107},function(err,result){
    if(err){
      console.log(err);
      return;
    }
    console.log(result);
    client.close();
  }); */

/*****************  查   *****************/
  coll.find({id:101}).toArray(function(err,docs){
    if(err){
      console.log(err);
      return;
    }
    console.log(docs);  
    client.close()
  })

/*****************  改   *****************/
/*   coll.updateOne({id:104},{$set:{age:99}},function(err,result){
    if(err){
      console.log(err);
      return;
    }
    console.log(result);
    client.close();
  }) */

});