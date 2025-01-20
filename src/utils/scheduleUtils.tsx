export interface Schedule {
  open: number;
  close: number;
}

export interface Schedules {
  [key: number]: Schedule | null;
}

export interface ScheduleStatus {
  status: string;
  message: string;
}

export const schedules: Schedules = {
  0: { open: 9, close: 14 }, // Domingo
  1: null, // Segunda
  2: { open: 10, close: 20 }, // Terça
  3: { open: 10, close: 20 }, // Quarta
  4: { open: 10, close: 20 }, // Quinta
  5: { open: 10, close: 20 }, // Sexta
  6: { open: 9, close: 20 }, // Sábado
};

export const getScheduleStatus = (): ScheduleStatus => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTime = currentHour + currentMinutes / 60;

  const todaySchedule = schedules[dayOfWeek];

  // Se for domingo após o horário de fechamento ou segunda-feira
  if ((dayOfWeek === 0 && currentTime >= 14) || dayOfWeek === 1) {
    // Procura o próximo dia útil (terça-feira)
    const nextOpenDay = 2; // Terça-feira
    const nextSchedule = schedules[nextOpenDay];
    return {
      status: 'Fechado Agora ',
      message: `Abre terça às ${nextSchedule?.open}h.`,
    };
  }

  // Se não houver horário para hoje (segunda-feira)
  if (!todaySchedule) {
    const nextDay = (dayOfWeek + 1) % 7;
    const nextSchedule = schedules[nextDay];
    const nextOpen = nextSchedule?.open || 'Fechado';
    return {
      status: 'Fechado Agora ',
      message: `Abre amanhã às ${nextOpen}h.`,
    };
  }

  const { open, close } = todaySchedule;

  // Se estiver dentro do horário de funcionamento
  if (currentTime >= open && currentTime < close) {
    return {
      status: 'Aberto ',
      message: `Fecha às ${close}h.`,
    };
  }

  // Se for antes do horário de abertura
  if (currentTime < open) {
    return {
      status: 'Fechado Agora ',
      message: `Abre hoje às ${open}h.`,
    };
  }

  // Se já passou do horário de fechamento
  // Encontra o próximo dia útil
  let nextDay = (dayOfWeek + 1) % 7;
  while (!schedules[nextDay]) {
    nextDay = (nextDay + 1) % 7;
  }
  const nextSchedule = schedules[nextDay];
  const nextDayName = nextDay === 2 ? 'terça' : 'amanhã';

  return {
    status: 'Fechado ',
    message: `Abre ${nextDayName} às ${nextSchedule?.open}h.`,
  };
};
