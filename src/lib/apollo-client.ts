'use client';

import {ApolloClient, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

const apiLink = new RestLink({
	uri: 'https://restcountries.com/v3.1/',
});

export const client = new ApolloClient({
	link: apiLink,
	cache: new InMemoryCache(),
	defaultOptions: {
		query: {
			fetchPolicy: 'network-only',
		},
	},
});
