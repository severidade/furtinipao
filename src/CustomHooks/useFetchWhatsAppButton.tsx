/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { fetchWhatsAppButtonData } from '../utils/fetch.tsx';

export function useFetchWhatsAppButton() {
  const [data, setData] = useState<{ phoneNumber: string; message: string } | null>(null); // Renomeado para 'data'
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetchWhatsAppButtonData(); // Retira o endpoint
        setData(fetchedData);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, error }; // Renomeado para 'data'
}
