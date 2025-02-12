/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { fetchSanityData } from '../utils/FetchSanityData.tsx';

export function useFetchWhatsAppButton() {
  const [data, setData] = useState<{ phoneNumber: string; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const endpoint = 'whatsAppButton';
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetchSanityData(endpoint);
        setData(fetchedData);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, error };
}
