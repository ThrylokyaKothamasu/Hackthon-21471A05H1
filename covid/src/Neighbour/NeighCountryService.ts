import axios from 'axios';

export interface NeighCountry {
    country: string;
    cases: number;
    deaths: number;
    recovery: number;
}

export const getResponse = async (location: string): Promise<NeighCountry[]> => {
    try {
        const results = await axios.get(`https://disease.sh/v3/covid-19/countries/${location}`);
        const data = results.data;
        const countries: NeighCountry[] = data.map((country: any) => ({
            country: country.country,
            cases: country.cases,
            deaths: country.deaths,
            recovery: country.recovered
        }));
        return countries;
    } catch (error) {
        console.error('Error fetching COVID data:', error);
        throw error;
    }
};
