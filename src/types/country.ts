export interface Country {
	name: {
		common: string;
		official: string;
		nativeName: {
			[key: string]: {
				official: string;
				common: string;
			};
		};
	};
	capital: string[];
	region: string;
	subregion: string;
	population: number;
	area: number;
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
	coatOfArms: {
		png: string;
		svg: string;
	};
	currencies: {
		[key: string]: {
			name: string;
			symbol: string;
		};
	};
	languages: {
		[key: string]: string;
	};
	borders: string[];
	cca3: string;
	independent: boolean;
	status: string;
	unMember: boolean;
	latlng: number[];
	landlocked: boolean;
	timezones: string[];
}

export interface CountryTableData {
	name: {
		common: string;
		official: string;
	};
	capital: string[];
	region: string;
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
	population: number;
	cca3: string;
}


// 'use client';

// import {useState, useEffect} from 'react';
// import {CountryTableData} from '@/types/country';

// export function useCountries() {
// 	const [searchTerm, setSearchTerm] = useState('');
// 	const [countries, setCountries] = useState<CountryTableData[]>([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState<Error | null>(null);

// 	useEffect(() => {
// 		const fetchCountries = async () => {
// 			try {
// 				const response = await fetch('https://restcountries.com/v3.1/all');
// 				if (!response.ok) {
// 					throw new Error('Failed to fetch countries');
// 				}
// 				const data = await response.json();
// 				setCountries(data);
// 			} catch (err) {
// 				setError(err instanceof Error ? err : new Error('An error occurred'));
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		fetchCountries();
// 	}, []);

// 	const filteredCountries = countries.filter((country) => {
// 		const searchLower = searchTerm.toLowerCase();
// 		return (
// 			country.name.common.toLowerCase().includes(searchLower) ||
// 			(country.capital?.[0]?.toLowerCase().includes(searchLower) ?? false) ||
// 			country.region.toLowerCase().includes(searchLower)
// 		);
// 	});

// 	return {
// 		countries: filteredCountries,
// 		loading,
// 		error,
// 		searchTerm,
// 		setSearchTerm,
// 	};
// }