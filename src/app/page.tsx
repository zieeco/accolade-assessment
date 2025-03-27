'use client';

import {CountryTable} from '@/components/country-table';
import {SearchBar} from '@/components/search-bar';
import {useCountries} from '@/hooks/use-countries';
import {Suspense} from 'react';

export default function Home() {
	const {countries, loading, error, setSearchTerm} = useCountries();

	return (
		<main className="container mx-auto px-4 py-8 lg:px-48">
			<h1 className="text-4xl font-bold mb-8 text-center">Country Explorer</h1>
			<SearchBar onSearch={setSearchTerm} />
			<Suspense fallback={<CountryTable countries={[]} isLoading={true} />}>
				<CountryTable countries={countries} isLoading={loading} error={error} />
			</Suspense>
		</main>
	);
}
