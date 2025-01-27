/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { fetchHistoryData } from '../utils/fetch.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

export function useFetchHistoryData(endpoint: string) {
  const [historyData, setHistoryData] = useState<SectionTemplateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchHistoryData(endpoint);
        setHistoryData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { historyData, isLoading, error };
}
