/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { fetchEventsData } from '../utils/fetch.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

export function useFetchEventsData(endpoint: string) {
  const [eventsData, setEventsData] = useState<SectionTemplateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchEventsData(endpoint);
        setEventsData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { eventsData, isLoading, error };
}
