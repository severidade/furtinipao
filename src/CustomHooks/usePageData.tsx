/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { fetchSanityData } from '../utils/FetchSanityData.tsx';
import { PageData } from '../types/PageDataType.tsx';

export default function usePageData() {
  return useQuery<PageData>({
    queryKey: ['pageData'],
    queryFn: async (): Promise<PageData> => {
      try {
        const [
          heroWelcome,
          lunch,
          breads,
          address,
          openingHours,
          history,
          events,
          highlightGallery,
          whatsAppButton,
        ] = await Promise.all([
          fetchSanityData('sectionHeroWelcome'),
          fetchSanityData('lunch'),
          fetchSanityData('breads'),
          fetchSanityData('sectionAddress'),
          fetchSanityData('openingHours'),
          fetchSanityData('history'),
          fetchSanityData('events'),
          fetchSanityData('highlightGallery'),
          fetchSanityData('whatsAppButton'),
        ]);

        return {
          heroWelcome,
          lunch,
          breads,
          address,
          openingHours,
          history,
          events,
          highlightGallery,
          whatsAppButton,
        };
      } catch (error) {
        throw new Error(
          error instanceof Error
            ? error.message
            : 'Erro ao carregar dados da página',
        );
      }
    },
    staleTime: 1000 * 60 * 5, // Dados considerados fresh por 5 minutos
    cacheTime: 1000 * 60 * 30, // Cache mantido por 30 minutos
  });
}
