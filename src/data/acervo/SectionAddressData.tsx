/* eslint-disable max-len */
import foto01 from '../assets/CoffeeGallery/01.webp';
import foto02 from '../assets/CoffeeGallery/02.webp';
import foto03 from '../assets/CoffeeGallery/03.webp';

import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

const DEFAULT_HEADER = {
  title: 'Nova Casa',
  // subtitle: 'A  Casa Rosa do Furtini está na Rua Carangola, 358, esquina com Rua Primavera, 21 no bairro Santo Antônio - Belo Horizonte',
  subtitle: 'A Casa Rosa do Furtini, assim apelidada carinhosamente pela vizinhança do bairro Santo Antônio, datada de 1909, por si só já é uma atração turística! Totalmente reformada e tombada no início do ano de 2024, a modernidade trouxe de volta vida e conservou a história de pessoas que ali viveram e trabalharam.',
};

const DEFAULT_SLIDER = [
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
];

const DEFAULT_LIST = [
  {
    id: 1,
    value: 'Espaço projetado para acessibilidade à PCD.',
    // value: 'O espaço foi projetado para ser acessível a pessoas com deficiência (PCD), garantindo conforto e segurança para todos.',
  },
  {
    id: 2,
    value: 'Somos Pet Friendly também!',
    // value: 'O ambiente é pet friendly, permitindo a presença de animais de estimação e garantindo conforto e bem-estar para todos.',
  },
];

const SectionAddressData: SectionTemplateType[] = [
  {
    id: 1,
    header: DEFAULT_HEADER,
    characteristics: DEFAULT_LIST,
    gallerySlider: DEFAULT_SLIDER,
  },
];

export default SectionAddressData;
