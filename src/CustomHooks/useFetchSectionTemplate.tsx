/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { fetchSanityData } from '../utils/FetchSanityData.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

export function useFetchSectionTemplate(endpoint: string) {
  const [data, setData] = useState<SectionTemplateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const sectionData = await fetchSanityData(endpoint);
        setData(sectionData as SectionTemplateType[]);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
}
