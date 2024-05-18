import React, { useEffect, useState } from "react";
import { getVaccinated, CovidVaccinated } from './VaccinatedService';

export const Vaccinated: React.FC = (): JSX.Element => {
    const [location, setLocation] = useState<string>("India");
    const [covidVaccinated, setCovidVaccinated] = useState<CovidVaccinated | undefined>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const result = await getVaccinated(location);
                setCovidVaccinated(result);
            } catch (error) {
                console.error('Error fetching COVID data:', error);
                setError('Error fetching COVID data');
            }
        };
        fetchResponse();
    }, [location]);

    return (
        <div className="a">
            <h2>Number of People Vaccinated</h2>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Angola">Angola</option>
                <option value="Brazil">Brazil</option>

            </select>
            
            {error && <p>{error}</p>}
            {covidVaccinated && (
                <div>
                    <p>Country : {covidVaccinated.country}</p>
                    <p>No of Vaccinated: {covidVaccinated.no_of_vaccinated}</p>
                </div>
            )}
        </div>
    );
};
