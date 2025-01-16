import { SectionAddressDataType } from '../types/SectionAddressDataType.tsx';
import foto01 from '../assets/CoffeeGallery/01.webp';
import foto02 from '../assets/CoffeeGallery/02.webp';
import foto03 from '../assets/CoffeeGallery/03.webp';

const SectionAddressData: SectionAddressDataType[] = [
  {
    id: 1,
    headerAddress: {
      addressTitle: 'Nova Casa',
      addressDetails: 'A  Casa Rosa do Furtini está na Rua Carangola, 358, esquina com Rua Primavera, 21 no bairro Santo Antônio - Belo Horizonte',
    },
    accessibility: 'O espaço foi projetado para ser acessível a pessoas com deficiência (PCD), garantindo conforto e segurança para todos.',
    petFriendly: 'O ambiente é pet friendly, permitindo a presença de animais de estimação e garantindo conforto e bem-estar para todos.',
    slider: [
      {
        id: 1,
        altText: 'Foto interna do salão',
        image: foto01,
      },
      {
        id: 2,
        altText: 'Foto da fachada do prédio',
        image: foto02,
      },
      {
        id: 3,
        altText: 'Foto da fachada do prédio',
        image: foto03,
      },
    ],
  },
];

export default SectionAddressData;
