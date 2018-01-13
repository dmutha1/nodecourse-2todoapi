// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
      return console.log('Unable to connect to the Mongo DB server');
    }
    console.log('Connected to MongoDB Server');

  //findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a58fc6d45b8a96895751476')
  }, {
    $set:{
      completed: true
    }
  },{
    returnOriginal:true
  }).then((result)=>{
    console.log(result);
  });
    // db.close();
  });
