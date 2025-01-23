/* eslint-disable max-len */
// import { LunchDataType } from '../types/LunchDataType.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

import foto01 from '../assets/lunch/prato.png';

const DEFAULT_FIGURE = {
  url: foto01,
  altText: 'Foto do prato executivo servido no Pão do Furtini',
};

const DEFAULT_HEADER = {
  title: 'Almoço executivo',
  subtitle: 'Que Delícia!',
  figure: DEFAULT_FIGURE,
};

const DEFAULT_CONTENT = 'Seja para um almoço executivo de negócios durante a semana ou algo mais descontraído aos sábados, no Pão do Furtini deliciosos pratos são a garantia de um bom pedido a toda hora. Durante os dias de semana, uma reunião de trabalho pode ser mais saborosa com pratos clássicos e, aos sábados, o cardápio se transforma em algo mais elaborado que acompanhado de um espumante fecha a semana de forma prazerosa e alegre.';

const LunchData: SectionTemplateType[] = [
  {
    id: 1,
    header: DEFAULT_HEADER,
    // content: 'De terça a sexta, das 10h às 14h30. Aos finais de semana, serviço à la carte no mesmo horário.',
    content: DEFAULT_CONTENT,
  },

];

export default LunchData;
