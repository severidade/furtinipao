import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

const DEFAULT_HEADER = {
  title: 'Horário de Funcionamento',
};

const DEFAULT_SCHEDULE = [
  { day: 'Terça a Sexta', hours: '10h às 20h' },
  { day: 'Sábado', hours: '9h às 20h' },
  { day: 'Domingo', hours: '9h às 14h' },
  { day: 'Feriados', hours: '9h às 19h30' },
];

const DEFAULT_CALL_TO_ACTION = {
  phoneNumber: '5531992456878',
  buttonTitle: 'Faça sua reserva',
  message: 'Olá! Gostaria de fazer uma reserva.',
  model: 'reserv',
};

const OpeningHoursData: SectionTemplateType[] = [
  {
    id: 1,
    header: DEFAULT_HEADER,
    schedule: DEFAULT_SCHEDULE,
    callToActionBt: DEFAULT_CALL_TO_ACTION,
  },
];

export default OpeningHoursData;
