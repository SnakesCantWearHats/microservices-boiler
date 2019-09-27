import mongoose from 'mongoose';

mongoose.connect('mongodb://authorization-mongo:27017/demo', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection succesful');
});

export default db;
