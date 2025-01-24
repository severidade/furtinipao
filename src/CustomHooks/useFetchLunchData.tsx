/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { client } from '../sanityClient.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

export function useFetchLunchData(endpoint?: string) {
  const [lunchData, setLunchData] = useState<SectionTemplateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchLunchData() {
      try {
        const query = `*[_type == "${endpoint}"]{
          id,
          header {
            title,
            subtitle,
            "figure": {
              "url": figure.asset->url,
              "altText": figure.altText
            }
          },
          content
        }`;

        const result = await client.fetch(query);
        setLunchData(result);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchLunchData();
  }, [endpoint]);

  return { lunchData, isLoading, error };
}
