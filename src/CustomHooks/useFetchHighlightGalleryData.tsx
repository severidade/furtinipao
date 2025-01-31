/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { fetchHighlightGalleryData } from '../utils/fetch.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

export function useFetchHighlightGalleryData(endpoint: string) {
  const [highlightGalleryData, setHighlightGalleryData] = useState<SectionTemplateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchHighlightGalleryData(endpoint);
        setHighlightGalleryData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { highlightGalleryData, isLoading, error };
}
