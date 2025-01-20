import { SectionTemplateType } from '../types/SectionTemplateType.tsx';
import figureUrl from '../assets/Events/eventos.jpg';

const DEFAULT_FIGURE = {
  url: figureUrl,
  altText: 'Imagem da cafeteria no maleta',
};

const DEFAULT_HEADER = {
  title: 'Eventos',
  subtitle: '',
};

const DEFAULT_INFO = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ligula viverra, facilisis justo at, malesuada odio. Integer interdum, erat nec tincidunt vehicula, nisl metus faucibus ligula, id cursus quam purus sed mi. Mauris ut fringilla nisl, eget posuere ligula. Fusce nec vehicula erat, ac volutpat purus. Nulla facilisi.';

const DEFAULT_CALL_TO_ACTION = {
  phoneNumber: '5531992456878',
  buttonTitle: 'Agendar Evento',
  message: 'Olá! Quero realizar um evento incrível com vocês. Como podemos começar?',
  model: 'event',
};

const EventsData: SectionTemplateType[] = [
  {
    id: 1,
    figure: DEFAULT_FIGURE,
    header: DEFAULT_HEADER,
    content: DEFAULT_INFO,
    callToActionBt: DEFAULT_CALL_TO_ACTION,
  },
];

export default EventsData;
