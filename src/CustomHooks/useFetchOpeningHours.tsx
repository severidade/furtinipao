/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

import { useEffect, useState } from 'react';
import { fetchSanityData } from '../utils/FetchSanityData.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

export function useFetchOpeningHours(endpoint: string) {
  const [openingHours, setOpeningHours] = useState<SectionTemplateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSanityData(endpoint);
        setOpeningHours(data as SectionTemplateType[]);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { openingHours, isLoading, error };
}
