import React, { useEffect, useState } from "react";
import { getResponse, NeighCountry } from './NeighCountryService';

export const Neighbour: React.FC = (): JSX.Element => {
    const [location, setLocation] = useState<string>("India");
    const [NeighCountry, setNeighCountry] = useState<NeighCountry[] | undefined>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const result = await getResponse(location);
                setNeighCountry(result);
            } catch (error) {
                console.error('Error fetching COVID data:', error);
                setError('Error fetching COVID data');
            }
        };
        fetchResponse();
    }, [location]);

    return (
        <div className="a">
            <h2>Neighboring Countries</h2>
            {error && <p>{error}</p>}
            {NeighCountry && (
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Covid Cases</th>
                            <th>Covid Deaths</th>
                            <th>Covid Recovery</th>
                        </tr>
                    </thead>
                    <tbody>
                        {NeighCountry.map((country:NeighCountry, index: number) => (
                            <tr key={index}>
                                <td>{country.country}</td>
                                <td>{country.cases}</td>
                                <td>{country.deaths}</td>
                                <td>{country.recovery}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
