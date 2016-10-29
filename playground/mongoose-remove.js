const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findOneAndRemove({_id: '5814ee4ba3dc260b04c72391'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5814ee4ba3dc260b04c72391').then((todo) => {
  console.log(todo);
});
