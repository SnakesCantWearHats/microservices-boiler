import { ObjectId } from 'bson';
import { Document } from 'mongoose';

type Roles = 'Admin' | 'Normal';
export interface IUserDocument extends Document {
	_id: ObjectId;
	name: string;
	role: Roles;
	password: string;
	email: string;
}

export interface IUserRepository {
	createUser(name: string, email: string, password: string): Promise<void>;
	findUsersByNameOrEmail(name: string, email: string): Promise<IUserDocument[]>;
	findUserByEmail(email: string): Promise<IUserDocument | null>;
}

export interface IUserService {
	findUserByEmail(email: string): Promise<IUserDocument>;
	createNewUser(name: string, email: string, password: string): Promise<void>;
}
