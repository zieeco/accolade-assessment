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

interface CountryTableProps {
	countries: CountryTableData[];
	isLoading: boolean;
	error?: Error | null;
}

export function CountryTable({countries, isLoading, error}: CountryTableProps) {
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

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Flag</TableHead>
					<TableHead>
						<Button variant="ghost" className="flex items-center">
							Name
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</Button>
					</TableHead>
					<TableHead>
						<Button
							variant="ghost"
							className="flex items-center">
							Capital
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</Button>
					</TableHead>
					<TableHead>
						<Button
							variant="ghost"
							className="flex items-center">
							Region
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</Button>
					</TableHead>
					<TableHead>
						<Button
							variant="ghost"
							className="flex items-center">
							Population
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</Button>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{countries?.map((country) => (
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
