'use client';

import {useQuery} from '@apollo/client';
import {GET_COUNTRIES} from '../graphql/queries';
import {Country} from '@/types/country';
import {useState} from 'react';

export function useCountries() {
	const [searchTerm, setSearchTerm] = useState('');
	const {data, error, loading} = useQuery<{countries: Country[]}>(
		GET_COUNTRIES
	);

	const filteredCountries = data?.countries?.filter((country) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			country.name.common.toLowerCase().includes(searchLower) ||
			(country.capital?.[0]?.toLowerCase().includes(searchLower) ?? false) ||
			country.region.toLowerCase().includes(searchLower)
		);
	});

	return {
		countries: filteredCountries ?? [],
		loading,
		error,
		searchTerm,
		setSearchTerm,
	};
}
