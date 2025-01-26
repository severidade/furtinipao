/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { fetchBreadsData } from '../utils/fetch.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

export function useFetchBreadsData(endpoint: string) {
  const [breadsData, setBreadsData] = useState<SectionTemplateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBreadsData(endpoint);
        setBreadsData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { breadsData, isLoading, error };
}
