import passport from 'passport';
import { VerifyFunction, Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import bcrypt from 'bcrypt';

import container from '../container';
import { SERVICE_IDENTIFIER } from '../constants';
import { IUserService } from '../services/user/user.interface';
import secret from '../SECRET';

const verifyFunction: VerifyFunction = async (email, password, done) => {
	const userService = container.get<IUserService>(SERVICE_IDENTIFIER.UserService);
	try {
		const user = await userService.findUserByEmail(email.toLowerCase());
		if (!user) {
			return done(null, false, { message: 'Incorrect name or email.' })
		}
		if (await bcrypt.compare(password, user.password)) {
			return done(null, user);
		}
		return done(null, false, { message: 'Incorrect password' });
	} catch(error) {
		done(error);
	}
};

passport.use(
	new LocalStrategy(
		{ usernameField: 'email', passwordField: 'password', session: false },
		verifyFunction,
	) as any
);

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret,
};
const jwtFunction: VerifiedCallback = async (jwtPayload, done) => {
	const userService = container.get<IUserService>(SERVICE_IDENTIFIER.UserService);

	try {
		const { email } = jwtPayload;
		const user = await userService.findUserByEmail(email.toLowerCase());
		if (!user) {
			done(null, false, { message: 'Invalid token' });
		}
		done(null, user);
	} catch(error) {
		done(error);
	}
}
passport.use(new JwtStrategy(opts, jwtFunction) as any);

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

export default passport;
