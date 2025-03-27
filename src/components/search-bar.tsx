'use client';

import {useState, useEffect} from 'react';
import {Input} from '@/components/ui/input';
import {Search} from 'lucide-react';

interface SearchBarProps {
	onSearch: (term: string) => void;
}

export function SearchBar({onSearch}: SearchBarProps) {
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const debounceTimer = setTimeout(() => {
			onSearch(searchTerm);
		}, 300);

		return () => clearTimeout(debounceTimer);
	}, [searchTerm, onSearch]);

	return (
		<div className="relative mb-6">
			<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
			<Input
				type="text"
				placeholder="Search by country name, capital, or region..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				className="pl-10"
			/>
		</div>
	);
}
