'use client';

import {CountryTable} from '@/components/country-table';
import {useCountries} from '@/hooks/use-country';
import {Suspense} from 'react';

export default function Home() {
	const {countries, loading, error} = useCountries();

	console.log('the countries, ', countries);
	return (
		<main className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8 text-center">Country Explorer</h1>
			<Suspense fallback={<CountryTable countries={[]} isLoading={true} />}>
				<CountryTable countries={countries} isLoading={loading} error={error} />
			</Suspense>
		</main>
	);
}
