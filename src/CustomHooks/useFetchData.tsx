/* eslint-disable max-len */
import { useEffect, useState } from 'react';

export default function useFetchData<T>(fetchFunction: (endpoint: string) => Promise<T>, endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchFunction(endpoint);
        console.log(`Dados retornados do Sanity (${endpoint}):`, response);
        setData(response);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(`Erro ao buscar ${endpoint}`));
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [fetchFunction, endpoint]);

  return { data, isLoading, error };
}
