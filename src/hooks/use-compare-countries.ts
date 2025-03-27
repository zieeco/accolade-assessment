'use client';

import {useQuery} from '@apollo/client';
import {COMPARE_COUNTRIES} from '../graphql/queries';

export function useCompareCountries(code1: string, code2: string) {
	const {data, loading, error} = useQuery(COMPARE_COUNTRIES, {
		variables: {code1, code2},
		skip: !code1 || !code2,
	});

	return {
		data,
		country1: data?.country1?.[0] || null,
		country2: data?.country2?.[0] || null,
		loading,
		error,
	};
}
