/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';
import { fetchHistoryData, fetchEventsData } from '../utils/fetch.tsx';

type FetchDataMap = {
  [key: string]: (endpoint: string) => Promise<SectionTemplateType[]>;
};

// Mapeia o ID para a função de fetch correspondente
const fetchDataMap: FetchDataMap = {
  history: fetchHistoryData,
  events: fetchEventsData,
};

export function useFetchSectionTemplate(id: string) {
  const [data, setData] = useState<SectionTemplateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchFunction = fetchDataMap[id];
        if (!fetchFunction) {
          throw new Error(`Nenhuma função de fetch disponível para o ID: ${id}`);
        }

        const fetchedData = await fetchFunction(id); // Busca os dados com base no ID
        setData(fetchedData);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return { data, isLoading, error };
}
