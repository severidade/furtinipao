import { SectionTemplateType } from '../types/SectionTemplateType.tsx';
import figureUrl from '../assets/Events/eventos.jpg';

const EventsData: SectionTemplateType[] = [
  {
    id: 1,
    figure: {
      url: figureUrl,
      altText: 'Imagem da cafeteria no maleta',
    },
    header: {
      title: 'Eventos',
      subtitle: '',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ligula viverra, facilisis justo at, malesuada odio. Integer interdum, erat nec tincidunt vehicula, nisl metus faucibus ligula, id cursus quam purus sed mi. Mauris ut fringilla nisl, eget posuere ligula. Fusce nec vehicula erat, ac volutpat purus. Nulla facilisi."',
    callToActionBt: {
      phoneNumber: '5531992456878',
      buttonTitle: 'Agendar Evento',
      message: 'Olá! Quero realizar um evento incrível com vocês. Como podemos começar?',
      model: 'event',
    },
  },

];

export default EventsData;
