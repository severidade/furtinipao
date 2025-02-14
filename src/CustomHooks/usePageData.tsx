/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { fetchSanityData } from '../utils/FetchSanityData.tsx';
import {
  PageData,
  SectionHeroWelcomeType,
  LunchType,
  BreadsType,
  AddressType,
  OpeningHoursType,
  HistoryType,
  EventsType,
  HighlightGalleryType,
  WhatsAppButtonType,
} from '../types/PageDataType.tsx';

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
          fetchSanityData<SectionHeroWelcomeType>('sectionHeroWelcome'),
          fetchSanityData<LunchType>('lunch'),
          fetchSanityData<BreadsType>('breads'),
          fetchSanityData<AddressType>('sectionAddress'),
          fetchSanityData<OpeningHoursType>('openingHours'),
          fetchSanityData<HistoryType>('history'),
          fetchSanityData<EventsType>('events'),
          fetchSanityData<HighlightGalleryType>('highlightGallery'),
          fetchSanityData<WhatsAppButtonType>('whatsAppButton'),
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
    gcTime: 1000 * 60 * 30, // Cache mantido por 30 minutos
  });
}
