// import { LunchDataType } from '../types/LunchDataType.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

import foto01 from '../assets/lunch/prato.png';

const LunchData: SectionTemplateType[] = [
  {
    id: 1,
    header: {
      title: 'Almoço executivo',
      subtitle: 'Que Delícia!',
      figure: {
        url: foto01,
        altText: 'Foto do prato executivo servido no Pão do Furtini',
      },
    },
    content: 'De terça a sexta, das 10h às 14h30. Aos finais de semana, serviço à la carte no mesmo horário.',
  },

];

export default LunchData;
