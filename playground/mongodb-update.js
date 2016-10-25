// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('580fbe9ccaef372dc0715ade')}, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({_id: new ObjectID('580fcaadcaef372dc0715adf')}, {
    $set: {
      name: 'Alex'
    },
    $inc: {
      age: 1
    }
  }, {returnOriginal: false}).then((result) => {
    console.log(result);
  });

  // db.close();


});
