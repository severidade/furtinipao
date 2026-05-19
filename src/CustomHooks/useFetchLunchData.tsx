/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { fetchSanityData } from '../utils/FetchSanityData.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

export function useFetchLunchData(endpoint: string) {
  const [lunchData, setLunchData] = useState<SectionTemplateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSanityData(endpoint);
        setLunchData(data as SectionTemplateType[]);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { lunchData, isLoading, error };
}

// 3. Como isso organiza melhor o código?
// Arquivo fetch.tsx:

// Centraliza todas as funções relacionadas a chamadas de API.
// Facilita testes isolados das chamadas de API.
// Melhora a reutilização: se outros hooks ou componentes precisarem buscar dados,
// basta adicionar uma função específica no utilitário.
// Hook useFetchLunchData:

// Focado apenas no gerenciamento de estado e efeitos.
// Reduz duplicação de lógica para tratar erros ou construir queries.
