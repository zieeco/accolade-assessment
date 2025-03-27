'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {Button} from '@/components/ui/button';
import {Skeleton} from '@/components/ui/skeleton';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {AlertCircle, ArrowUpDown} from 'lucide-react';
import {CountryTableData} from '@/types/country';
import {useState} from 'react';

interface CountryTableProps {
	countries: CountryTableData[];
	isLoading: boolean;
	error?: Error | null;
}

type SortKey = 'name' | 'capital' | 'region' | 'population';
type SortOrder = 'asc' | 'desc';

export function CountryTable({countries, isLoading, error}: CountryTableProps) {
	const [sortKey, setSortKey] = useState<SortKey>('name');
	const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
	if (error) {
		return (
			<Alert variant="destructive">
				<AlertCircle className="h-4 w-4" />
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>{error.message}</AlertDescription>
			</Alert>
		);
	}

	if (isLoading) {
		return (
			<div className="space-y-4">
				{[...Array(5)].map((_, i) => (
					<Skeleton key={i} className="h-12 w-full" />
				))}
			</div>
		);
	}

	const sortedCountries = [...countries].sort((a, b) => {
		let compareA: string | number;
		let compareB: string | number;

		switch (sortKey) {
			case 'name':
				compareA = a.name.common;
				compareB = b.name.common;
				break;
			case 'capital':
				compareA = a.capital?.[0] || '';
				compareB = b.capital?.[0] || '';
				break;
			case 'region':
				compareA = a.region;
				compareB = b.region;
				break;
			case 'population':
				compareA = a.population;
				compareB = b.population;
				return sortOrder === 'asc'
					? Number(compareA) - Number(compareB)
					: Number(compareB) - Number(compareA);
		}

		if (sortOrder === 'asc') {
			return compareA.toString().localeCompare(compareB.toString());
		}
		return compareB.toString().localeCompare(compareA.toString());
	});

	const handleSort = (key: SortKey) => {
		if (sortKey === key) {
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
		} else {
			setSortKey(key);
			setSortOrder('asc');
		}
	};

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Flag</TableHead>
					<TableHead>
						<Button
							variant="ghost"
							onClick={() => handleSort('name')}
							className="flex items-center">
							Name
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</Button>
					</TableHead>
					<TableHead>
						<Button
							variant="ghost"
							onClick={() => handleSort('capital')}
							className="flex items-center">
							Capital
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</Button>
					</TableHead>
					<TableHead>
						<Button
							variant="ghost"
							onClick={() => handleSort('region')}
							className="flex items-center">
							Region
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</Button>
					</TableHead>
					<TableHead>
						<Button
							variant="ghost"
							onClick={() => handleSort('population')}
							className="flex items-center">
							Population
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</Button>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{sortedCountries.map((country) => (
					<TableRow key={country.cca3}>
						<TableCell>
							<Image
								src={country.flags.svg}
								alt={country.flags.alt || `Flag of ${country.name.common}`}
								width={30}
								height={30}
								className="rounded shadow-sm"
							/>
						</TableCell>
						<TableCell>
							<Link
								href={`/country/${country.cca3}`}
								className="text-blue-600 hover:text-blues-800 dark:text-blue-400
                dark:hover:text-blue-200">
								{country.name.common}
							</Link>
						</TableCell>
						<TableCell>{country.capital?.[0] || 'N/A'}</TableCell>
						<TableCell>{country.region}</TableCell>
						<TableCell>{country.population.toLocaleString()}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
