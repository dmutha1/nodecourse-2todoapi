var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');



var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT||3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=> {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) =>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  })
});

app.delete( '/todos/:id',(req,res)=>{

  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
    return res.status(404).send();
    }
   res.status(200).send(todo);
  }).catch((e) =>{
    return res.status(400).send();
  });

  // remove todo by id
    //success
      //if no doc send 404
      //if doc, send doc back with 200
    //error
      //400 with empty body
});

app.get('/todos/:id',(req,res) =>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    res.status(404).send('ID Invalid Empty Body');
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
    return res.status(404).send();
    }

return res.status(200).send(todo);
}).catch((e)=>{
  return res.status(400).send(id);
});
  //find by ID
  //success case
    //if todo - send it back

  //error
    //400 - send back nothing
});


app.listen(port,()=>{
  console.log(`Started on port ${port}`);
});

module.exports ={app};
