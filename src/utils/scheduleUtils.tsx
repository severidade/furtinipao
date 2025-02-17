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

interface Holiday {
  name: string;
  isHoliday: boolean;
}

interface Holidays {
  [key: string]: Holiday;
}

const holidays: Holidays = {
  '2025-02-17': { name: 'teste como feriado', isHoliday: true },
  '2025-02-18': { name: 'teste como feriado', isHoliday: true },
  // Adicione mais feriados no formato YYYY-MM-DD
};

const HOLIDAY_SCHEDULE: Schedule = {
  open: 9,
  close: 20,
};

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
  const todayDate = now.toISOString().split('T')[0];

  // Se for segunda-feira, está fechado independentemente de ser feriado
  if (dayOfWeek === 1) {
    // Verifica se amanhã (terça) é feriado
    const tomorrowDate = new Date(now);
    tomorrowDate.setDate(now.getDate() + 1);
    const tomorrowString = tomorrowDate.toISOString().split('T')[0];
    const tomorrowHoliday = holidays[tomorrowString];

    const openingHour = tomorrowHoliday?.isHoliday ? HOLIDAY_SCHEDULE.open : schedules[2].open;
    const holidayInfo = tomorrowHoliday?.isHoliday ? ` (${tomorrowHoliday.name})` : '';

    return {
      status: 'Fechado Agora ',
      message: `Abre terça às ${openingHour}h${holidayInfo}.`,
    };
  }

  // Verificar se é feriado (exceto segunda-feira)
  const todayHoliday = holidays[todayDate];
  if (todayHoliday?.isHoliday) {
    if (currentTime >= HOLIDAY_SCHEDULE.open && currentTime < HOLIDAY_SCHEDULE.close) {
      return {
        status: 'Aberto ',
        message: `Fecha às ${HOLIDAY_SCHEDULE.close}h (${todayHoliday.name}).`,
      };
    } if (currentTime < HOLIDAY_SCHEDULE.open) {
      return {
        status: 'Fechado Agora ',
        message: `Abre hoje às ${HOLIDAY_SCHEDULE.open}h (${todayHoliday.name}).`,
      };
    }
    // Após o horário de fechamento do feriado
    const tomorrowDate = new Date(now);
    tomorrowDate.setDate(now.getDate() + 1);
    const nextDay = tomorrowDate.getDay();
    const tomorrowString = tomorrowDate.toISOString().split('T')[0];
    const tomorrowHoliday = holidays[tomorrowString];

    // Se o próximo dia for segunda, mostra terça
    if (nextDay === 1) {
      const nextTuesdayDate = new Date(tomorrowDate);
      nextTuesdayDate.setDate(tomorrowDate.getDate() + 1);
      const tuesdayString = nextTuesdayDate.toISOString().split('T')[0];
      const tuesdayHoliday = holidays[tuesdayString];

      const openingHour = tuesdayHoliday?.isHoliday ? HOLIDAY_SCHEDULE.open : schedules[2].open;
      const holidayInfo = tuesdayHoliday?.isHoliday ? ` (${tuesdayHoliday.name})` : '';

      return {
        status: 'Fechado Agora ',
        message: `Abre terça às ${openingHour}h${holidayInfo}.`,
      };
    }

    // Se o próximo dia também for feriado
    if (tomorrowHoliday?.isHoliday) {
      return {
        status: 'Fechado Agora ',
        message: `Abre amanhã às ${HOLIDAY_SCHEDULE.open}h (${tomorrowHoliday.name}).`,
      };
    }

    // Próximo dia normal
    const nextSchedule = schedules[nextDay];
    return {
      status: 'Fechado Agora ',
      message: `Abre amanhã às ${nextSchedule?.open}h.`,
    };
  }

  // Não é feriado - segue o fluxo normal
  const todaySchedule = schedules[dayOfWeek];

  // Se for domingo após o horário de fechamento
  if (dayOfWeek === 0 && currentTime >= 14) {
    // Verifica se terça será feriado
    const tuesdayDate = new Date(now);
    tuesdayDate.setDate(now.getDate() + 2);
    const tuesdayString = tuesdayDate.toISOString().split('T')[0];
    const tuesdayHoliday = holidays[tuesdayString];

    const openingHour = tuesdayHoliday?.isHoliday ? HOLIDAY_SCHEDULE.open : schedules[2].open;
    const holidayInfo = tuesdayHoliday?.isHoliday ? ` (${tuesdayHoliday.name})` : '';

    return {
      status: 'Fechado Agora ',
      message: `Abre terça às ${openingHour}h${holidayInfo}.`,
    };
  }

  // Se estiver dentro do horário de funcionamento
  if (currentTime >= todaySchedule.open && currentTime < todaySchedule.close) {
    return {
      status: 'Aberto ',
      message: `Fecha às ${todaySchedule.close}h.`,
    };
  }

  // Se for antes do horário de abertura
  if (currentTime < todaySchedule.open) {
    return {
      status: 'Fechado Agora ',
      message: `Abre hoje às ${todaySchedule.open}h.`,
    };
  }

  // Se já passou do horário de fechamento
  let nextDay = (dayOfWeek + 1) % 7;
  const tomorrowDate = new Date(now);
  tomorrowDate.setDate(now.getDate() + 1);
  const tomorrowString = tomorrowDate.toISOString().split('T')[0];
  const tomorrowHoliday = holidays[tomorrowString];

  // Se o próximo dia for segunda, pula para terça
  if (nextDay === 1) {
    nextDay = 2;
    const tuesdayDate = new Date(tomorrowDate);
    tuesdayDate.setDate(tomorrowDate.getDate() + 1);
    const tuesdayString = tuesdayDate.toISOString().split('T')[0];
    const tuesdayHoliday = holidays[tuesdayString];

    const openingHour = tuesdayHoliday?.isHoliday ? HOLIDAY_SCHEDULE.open : schedules[2].open;
    const holidayInfo = tuesdayHoliday?.isHoliday ? ` (${tuesdayHoliday.name})` : '';

    return {
      status: 'Fechado Agora ',
      message: `Abre terça às ${openingHour}h${holidayInfo}.`,
    };
  }

  // Verifica se amanhã é feriado (exceto se for segunda)
  if (tomorrowHoliday?.isHoliday && nextDay !== 1) {
    return {
      status: 'Fechado Agora ',
      message: `Abre amanhã às ${HOLIDAY_SCHEDULE.open}h (${tomorrowHoliday.name}).`,
    };
  }

  const nextSchedule = schedules[nextDay];
  const nextDayName = nextDay === 2 ? 'terça' : 'amanhã';

  return {
    status: 'Fechado Agora ',
    message: `Abre ${nextDayName} às ${nextSchedule?.open}h.`,
  };
};
