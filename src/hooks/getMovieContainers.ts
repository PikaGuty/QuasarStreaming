import { useState, useEffect } from 'react';
import { ApiResponse } from '../constants/interfaces';

export function getMovieContainers(apiUrl: string) {
    const [movieData, setMovieData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    console.log("getMovieContainers hook called with apiUrl:", apiUrl);
    useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(apiUrl, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
            });

            if (!response.ok) {
                console.log("algo anda mal")
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json: ApiResponse = await response.json();
            if (isMounted) {
                setMovieData(json);
            }
        } catch (err) {
            if (isMounted) {
                setError(err as Error);
            }
        } finally {
            if (isMounted) {
                setLoading(false);
            }
        }
    };

    fetchData();

    return () => {
        isMounted = false;
    };
  }, [apiUrl]);

    return { movieData, loading, error };
}