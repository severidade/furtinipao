/* eslint-disable max-len */
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';
import figureUrl from '../assets/HistorySection/history.jpg';

const DEFAULT_FIGURE = {
  url: figureUrl,
  altText: 'Imagem da cafeteria no maleta',
};

const DEFAULT_HEADER = {
  title: 'Nossa História',
  // subtitle: 'Nossa história começou em 2018, movida pela busca por hábitos de vida mais saudáveis.',
};

// const DEFAULT_CONTENT = '<strong>O desejo de produzir</strong> nosso próprio alimento nos levou aos pães e à fermentação natural, iniciando uma jornada de aprendizado e evolução: criamos nosso fermento, experimentamos pães que nem sempre saíam perfeitos (mas para nós eram incríveis), enfrentamos queimaduras, erros e até dois fornos queimados.';
const DEFAULT_CONTENT = 'Foi em 2018 que tudo começou. Furtini começou a dar cursos de panificação na sala de sua casa e, logo depois, abriu sua primeira padaria/cafeteria no icónico edifício Maletta em BH. As coisas cresceram rápido e se transformaram no grande sucesso que é hoje no bairro Santo Antônio.';

const HistoryData: SectionTemplateType[] = [
  {
    id: 1,
    figure: DEFAULT_FIGURE,
    header: DEFAULT_HEADER,
    content: DEFAULT_CONTENT,
  },
];

export default HistoryData;
