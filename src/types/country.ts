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
