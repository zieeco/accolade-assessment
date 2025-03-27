'use client';

import {useQuery} from '@apollo/client';
import {GET_COUNTRY} from '@/graphql/queries';

export function useCountry(name: string) {
	const {data, ...rest} = useQuery(GET_COUNTRY, {variables: {name}});

	return {data: {country: data?.countries?.[0]}, ...rest};
}
