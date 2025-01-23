/* eslint-disable max-len */
import foto01 from '../assets/BreadsGallery/01_pao.webp';
import foto02 from '../assets/BreadsGallery/02_pao.webp';
import foto03 from '../assets/BreadsGallery/03_pao.webp';
import foto04 from '../assets/BreadsGallery/04_pao.webp';
import foto05 from '../assets/BreadsGallery/05_pao.webp';
import foto06 from '../assets/BreadsGallery/06_pao.webp';
import foto07 from '../assets/BreadsGallery/07_pao.webp';

import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

// Definição do cabeçalho padrão
const DEFAULT_HEADER = {
  title: 'Fornadas',
  subtitle: 'A padaria foi onde toda história começou e de lá saem pães de fermentação natural e quentinhos de terça a sábado. Com anos de aperfeiçoamento, Furtini elevou o mercado de panificação em Belo Horizonte para outro patamar e está hoje entre os melhores padeiros do estado de Minas Gerais.',
  // subtitle: 'Nossos pães são feitos com base de fermentação natural. São pães integrais, lindos, elegantes e sinceros. Você pode consumi-los no café ou levá-los para casa.',
};

// Informação padrão
const DEFAULT_INFO = 'Acompanhe nossa página no Instagram e saiba quais são os pães da semana. Faça seus pedidos por WhatsApp clicando no botão a seguir.';

// Chamada para ação
const DEFAULT_CALL_TO_ACTION = {
  phoneNumber: '5531984738820',
  buttonTitle: 'Faça seus pedidos',
  message: 'Olá! Gostaria de fazer um pedido de pão.',
  model: 'breads',
};

// Definição do slider de galeria
const DEFAULT_SLIDER = [
  {
    id: 1,
    altText: 'Foto do Pão Integral',
    breadName: 'Pão Integral',
    image: foto01,
  },
  {
    id: 2,
    altText: 'Foto do Pão de Milho com Girassol',
    breadName: 'Pão de Milho com Girassol',
    image: foto02,
  },
  {
    id: 3,
    altText: 'Foto do Pão de Chocolate',
    breadName: 'Pão de Chocolate',
    image: foto03,
  },
  {
    id: 4,
    altText: 'Foto do Pão Delícia de Minas',
    breadName: 'Pão Delícia de Minas',
    image: foto04,
  },
  {
    id: 5,
    altText: 'Foto do Pão Australiano',
    breadName: 'Pão Australiano',
    image: foto05,
  },
  {
    id: 6,
    altText: 'Foto do Pão de Milho',
    breadName: 'Pão de Milho',
    image: foto06,
  },
  {
    id: 7,
    altText: 'Foto do Brioche',
    breadName: 'Brioche',
    image: foto07,
  },
];

// Dados da seção de pães
const BreadsSectionData: SectionTemplateType[] = [
  {
    id: 1,
    header: DEFAULT_HEADER,
    content: DEFAULT_INFO,
    callToActionBt: DEFAULT_CALL_TO_ACTION,
    gallerySlider: DEFAULT_SLIDER,
  },
];

export default BreadsSectionData;
