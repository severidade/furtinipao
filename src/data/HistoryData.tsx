import { SectionTemplateType } from '../types/SectionTemplateType.tsx';
import figureUrl from '../assets/HistorySection/history.jpg';

const HistoryData: SectionTemplateType[] = [
  {
    id: 1,
    figure: {
      url: figureUrl,
      altText: 'Imagem da cafeteria no maleta',
    },
    header: {
      title: 'Nossa História',
      subtitle: 'Nossa história começou em 2018, movida pela busca por hábitos de vida mais saudáveis.',
    },
    content: 'O desejo de produzir nosso próprio alimento nos levou aos pães e à fermentação natural, iniciando uma jornada de aprendizado e evolução: criamos nosso fermento, experimentamos pães que nem sempre saíam perfeitos (mas para nós eram incríveis), enfrentamos queimaduras, erros e até dois fornos queimados.',
  },

];

export default HistoryData;
