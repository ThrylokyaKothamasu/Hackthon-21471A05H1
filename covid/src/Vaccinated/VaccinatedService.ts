import axios from 'axios';

export interface CovidVaccinated {
    country: string;
    no_of_vaccinated: number;
}

export const getVaccinated = async (location: string): Promise<CovidVaccinated> => {
    try {
        const results = await axios.get(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${location}?lastdays=1`);
        const date = Object.keys(results.data.timeline)[0];
        const no_of_vaccinated = results.data.timeline[date];

        return {
            country: results.data.country,
            no_of_vaccinated: no_of_vaccinated
        };
    } catch (error) {
        console.error('Error fetching COVID data:', error);
        throw error;
    }
};
