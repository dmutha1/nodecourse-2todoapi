const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
      return console.log('Unable to connect to the Mongo DB server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err,result)=>{
    //   if(err){
    //     return console.log('Unable to insert to do',err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined,2))
    // });
     db.collection('Users').insertOne({
       name:'Durga raj Mutha',
       age: 25,
       location:'Dallas, Texas'
     }, (err,result)=>{
       if(err){
         return console.log('Unable to write to DB');
       }

       console.log(JSON.stringify(result.ops,undefined,2));

     });
    db.close();
  });
