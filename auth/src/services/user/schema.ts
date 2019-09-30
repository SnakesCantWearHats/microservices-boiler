import mongoose from 'mongoose';

type Role = 'Admin' | 'Normal';

const userSchema = new mongoose.Schema({
	name: String,
	password: String,
	role: String,
	email: String,
});

const User = mongoose.model('User', userSchema);

export default User;
