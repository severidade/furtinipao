import { LunchDataType } from '../types/LunchDataType.tsx';

import foto01 from '../assets/lunch/prato.png';

const LunchData: LunchDataType[] = [
  {
    id: 1,
    headerLunch: {
      lunchTitle: 'Almoço executivo',
      figure: {
        image: foto01,
        altText: 'Foto do prato executivo servido no Pão do Furtini',
      },
      lunchSubTitle: 'Que Delícia!',
    },
    lunchHours: 'De terça a sexta, das 10h às 14h30. Aos finais de semana, serviço à la carte no mesmo horário.',
    paymentInfo: 'Aceitamos todos os cartões de refeição das bandeiras Visa e Mastercard além de Alelo, Pluxee (Sodexo) e VR.',
  },

];

export default LunchData;
