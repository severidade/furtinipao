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
      lunchHours: 'Terça a Sexta de 10 às 14h30',
    },
    paymentInfo: 'Aceitamos todos os cartões de refeição das bandeiras Visa e Mastercard além de Alelo, Pluxee (Sodexo) e VR.',
  },

];

export default LunchData;
