import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			headers: {
				authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
			},
			uri: 'https://api.github.com/graphql',
		}),
	});
});
