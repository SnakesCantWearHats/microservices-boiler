import mongoose from 'mongoose';

mongoose.connect('mongodb://authorization-mongo:27017/demo', {useNewUrlParser: true});

const db = mongoose.connection;


export default db;
