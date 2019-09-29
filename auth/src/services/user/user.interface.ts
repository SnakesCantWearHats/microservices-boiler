import { ObjectId } from 'bson';
import { Document } from 'mongoose';

export interface IUserDocument extends Document {
	_id: ObjectId;
	name: string;
	password: string;
	email: string;
}

export interface IUserRepository {
	createUser(name: string, email: string, password: string): Promise<void>;
	findUsersByNameOrEmail(name: string, email: string): Promise<IUserDocument[]>;
	findOneUserByNameOrEmail(name: string, email: string): Promise<IUserDocument | null>;
}

export interface IUserService {
	createNewUser(name: string, email: string, password: string): Promise<void>;
	findUserByNameOrEmail(name: string, email: string): Promise<IUserDocument>;
}
