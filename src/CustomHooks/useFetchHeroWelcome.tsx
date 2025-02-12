/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

import { useEffect, useState } from 'react';
import { fetchSanityData } from '../utils/FetchSanityData.tsx';
import { SectionHeroWelcomeType } from '../types/HeroWelcomeType.tsx';

export default function useFetchHeroWelcome(endpoint: string) {
  const [heroWelcomeData, setHeroWelcomeData] = useState<SectionHeroWelcomeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSanityData(endpoint);
        setHeroWelcomeData(data as SectionHeroWelcomeType[]);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { heroWelcomeData, isLoading, error };
}
