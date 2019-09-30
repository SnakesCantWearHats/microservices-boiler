import mongoose from 'mongoose';

mongoose.connect('mongodb://backend-mongo:27017/demo', {useNewUrlParser: true});

const db = mongoose.connection;

export default db;
