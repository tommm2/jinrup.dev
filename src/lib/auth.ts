import NextAuth, { type NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';

const config: NextAuthConfig = {
	providers: [
		GitHub({
			clientId: process.env.OAUTH_CLIENT_ID,
			clientSecret: process.env.OAUTH_CLIENT_SECRET,
		}),
	],
};

export const {
	handlers: { GET, POST },
	auth,
} = NextAuth(config);
