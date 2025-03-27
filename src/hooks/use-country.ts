'use client';

import {useQuery} from '@apollo/client';
import {GET_COUNTRIES} from '../graphql/queries';
import {Country} from '@/types/country';

export function useCountries() {
	const {data, error, loading} = useQuery<{countries: Country[]}>(
		GET_COUNTRIES
	);
	console.log('na the country be this for hook', data);
	return {
		countries: data?.countries || [],
		loading,
		error,
	};
}
