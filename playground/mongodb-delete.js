// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
      return console.log('Unable to connect to the Mongo DB server');
    }
    console.log('Connected to MongoDB Server');

  //deleteMany
  // db.collection('Todos').deleteMany({
  //   text:'Eat Lunch'
  // }).then((result) =>{
  //   console.log(result);
  // });

  //deleteOne

  // db.collection('Todos').deleteOne({
  //   text:'Eat Lunch'
  // }).then((result) =>{
  //   console.log(result);
  // });

  //findOneAndDelete - finds and deletes one value and also returns that value
  db.collection('Todos').findOneAndDelete({
    completed:false
  }).then((result)=>{
    console.log(result);
  })
    // db.close();
  });
