import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

const DEFAULT_SCHEDULE = [
  { day: 'Quarta a Sexta', hours: '10h às 18h' },
  { day: 'Sábado', hours: '10h às 14h' },
  // { day: 'Domingo', hours: '9h às 14h' },
  // { day: 'Feriados', hours: '9h às 20h' },
];

const OpeningHoursData: SectionTemplateType[] = [
  {
    schedule: DEFAULT_SCHEDULE,
  },
];

export default OpeningHoursData;
