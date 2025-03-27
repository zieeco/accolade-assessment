'use client';

import {gql} from '@apollo/client';

export const GET_COUNTRIES = gql`
	query GetCountries {
		countries @rest(type: "Country", path: "all") {
			name {
				common
				official
				nativeName
			}
			capital
			region
			subregion
			population
			area
			flags {
				png
				svg
				alt
			}
			coatOfArms {
				png
				svg
			}
			currencies
			languages
			borders
			cca3
			independent
			status
			unMember
			latlng
			landlocked
			timezones
		}
	}
`;

export const GET_COUNTRY = gql`
	query GetCountry($name: String!) {
		countries(name: $name)
			@rest(type: "[Country]", path: "name/{args.name}?fullText=true") {
			name @type(name: "CountryName") {
				common
				official
			}
			capital
			region
			population
			flags @type(name: "Flag") {
				png
				svg
			}
		}
	}
`;

// Query to compare two countries
export const COMPARE_COUNTRIES = gql`
	query CompareCountries($code1: String!, $code2: String!) {
		country1: country(code: $code1)
			@rest(type: "Country", path: "alpha/{args.code}") {
			name @type(name: "CountryName") {
				common
				official
			}
			capital
			currencies
			languages
			region
			subregion
			population
			flags {
				png
				svg
			}
			continents
		}
		country2: country(code: $code2)
			@rest(type: "Country", path: "alpha/{args.code}") {
			name @type(name: "CountryName") {
				common
				official
			}
			capital
			currencies
			languages
			region
			subregion
			population
			flags {
				png
				svg
			}
			continents
		}
	}
`;
