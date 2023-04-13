import { useState, useEffect } from "react";

interface ApiError extends Error {
  status: number;
  statusText: string;
}

export interface ApiCountry {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    png: string
    alt: string
  }
}

async function fetchCountries(url: string): Promise<ApiCountry[]> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export function useFetch(
  url: string
): [ApiCountry[] | null, boolean, Error | null] {
  const [data, setData] = useState<ApiCountry[] | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const countries = await fetchCountries(url);
        setData(countries);
      } catch (error: unknown) {
        const apiError = error as ApiError;
        setError(apiError);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [url]);

  return [data, isLoading, error];
}
