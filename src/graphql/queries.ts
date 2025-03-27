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