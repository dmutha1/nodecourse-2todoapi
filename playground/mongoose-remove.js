const {ObjectID}= require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove - removes multiple records

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });
//
// //findOneAndRemove and returns the removed doc
//
// Todo.findOneAndRemove({}).then((result)=>{
//   console.log('');
// });

//findByIdAndRemove - id as arguement and returns the doc

Todo.findByIdAndRemove('5a5acd0b88f869b9d0319136').then((todo) =>{
  console.log(todo);
})
