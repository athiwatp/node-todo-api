const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5813903e5f2e8625403cf182';
//
// if(!ObjectID.isValid(id)) {
//   console.log(' ID is not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

var userId = '5813b16b51765f26e40943a6';
User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User not found in database');
  }
  console.log('User', user);
}).catch((e) => console.log(e));;
