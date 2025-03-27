'use client';

import {useState} from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {AlertCircle} from 'lucide-react';
import {Skeleton} from '@/components/ui/skeleton';
import {useCountries} from '@/hooks/use-countries';
import {useCompareCountries} from '@/hooks/use-compare-countries';

export default function CompareCountries() {
	const [country1, setCountry1] = useState<string>('');
	const [country2, setCountry2] = useState<string>('');

	const {countries, error: countriesError} = useCountries();

	// Always call the hook, but only fetch data when both countries are selected
	const {data, loading} = useCompareCountries(country1 || '', country2 || '');

	if (countriesError) {
		return (
			<div className="container mx-auto px-4 py-8">
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{countriesError.message}</AlertDescription>
				</Alert>
			</div>
		);
	}
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8 text-center">Compare Countries</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
				<div>
					<Select
						onValueChange={(value) => setCountry1(value)}
						value={country1}>
						<SelectTrigger>
							<SelectValue placeholder="Select first country" />
						</SelectTrigger>
						<SelectContent>
							{countries?.map((country) => (
								<SelectItem key={country.cca3} value={country.cca3}>
									{country.name.common}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div>
					<Select
						onValueChange={(value) => setCountry2(value)}
						value={country2}>
						<SelectTrigger>
							<SelectValue placeholder="Select second country" />
						</SelectTrigger>
						<SelectContent>
							{countries?.map((country) => (
								<SelectItem key={country.cca3} value={country.cca3}>
									{country.name.common}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
			{loading ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Skeleton className="h-[300px]" />
					<Skeleton className="h-[300px]" />
				</div>
			) : data ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Country 1 Card */}
					<Card>
						<CardHeader>
							<CardTitle>{data.country1?.[0]?.name?.common}</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<p className="text-sm text-muted-foreground">Capital</p>
									<p className="text-2xl font-bold">
										{data.country1?.[0]?.capital?.[0]}
									</p>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Continent</p>
									<p className="text-2xl font-bold">
										{data.country1?.[0]?.continents?.[0]}
									</p>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Currency</p>
									<p className="text-2xl font-bold">
										{data.country1?.[0]?.currencies &&
											Object.values(
												data.country1[0].currencies as Record<
													string,
													{name: string}
												>
											)?.[0]?.name}
									</p>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Languages</p>
									<p className="text-lg">
										{data.country1?.[0]?.languages &&
											Object.values(data.country1[0].languages).join(', ')}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Country 2 Card */}
					<Card>
						<CardHeader>
							<CardTitle>{data.country2?.[0]?.name?.common}</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<p className="text-sm text-muted-foreground">Capital</p>
									<p className="text-2xl font-bold">
										{data.country2?.[0]?.capital?.[0]}
									</p>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Continent</p>
									<p className="text-2xl font-bold">
										{data.country2?.[0]?.continents?.[0]}
									</p>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Currency</p>
									<p className="text-2xl font-bold">
										{data.country2?.[0]?.currencies &&
											Object.values(
												data.country2[0].currencies as Record<
													string,
													{name: string}
												>
											)?.[0]?.name}
									</p>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Languages</p>
									<p className="text-lg">
										{data.country2?.[0]?.languages &&
											Object.values(data.country2[0].languages).join(', ')}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			) : null}
		</div>
	);
}
