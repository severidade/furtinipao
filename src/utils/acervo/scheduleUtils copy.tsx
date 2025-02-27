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
  '2025-02-18': { name: 'teste como carnava', isHoliday: true },
  '2025-02-19': { name: 'teste como carnava', isHoliday: true },

  '2025-01-01': { name: 'Confraternização Universal', isHoliday: true },
  '2025-03-03': { name: 'Carnaval', isHoliday: true },
  '2025-03-04': { name: 'Carnaval', isHoliday: true },
  '2025-03-05': { name: 'Quarta-feira de Cinzas', isHoliday: true },
  '2025-04-18': { name: 'Sexta-feira Santa', isHoliday: true },
  '2025-04-21': { name: 'Tiradentes', isHoliday: true },
  '2025-05-01': { name: 'Dia do Trabalhador', isHoliday: true },
  '2025-06-19': { name: 'Corpus Christi', isHoliday: true },
  '2025-09-07': { name: 'Independência do Brasil', isHoliday: true },
  '2025-10-12': { name: 'Nossa Senhora Aparecida', isHoliday: true },
  '2025-10-28': { name: 'Dia do Servidor Público', isHoliday: true },
  '2025-11-02': { name: 'Finados', isHoliday: true },
  '2025-11-15': { name: 'Proclamação da República', isHoliday: true },
  '2025-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHoliday: true },
  '2025-12-24': { name: 'Véspera de Natal', isHoliday: true },
  '2025-12-25': { name: 'Natal', isHoliday: true },
  '2025-12-31': { name: 'Véspera de Ano-Novo', isHoliday: true },

  // Feriados de 2026
  '2026-01-01': { name: 'Confraternização Universal', isHoliday: true },
  '2026-02-16': { name: 'Carnaval', isHoliday: true },
  '2026-02-17': { name: 'Carnaval', isHoliday: true },
  '2026-02-18': { name: 'Quarta-feira de Cinzas', isHoliday: true },
  '2026-04-03': { name: 'Sexta-feira Santa', isHoliday: true },
  '2026-04-21': { name: 'Tiradentes', isHoliday: true },
  '2026-05-01': { name: 'Dia do Trabalhador', isHoliday: true },
  '2026-06-04': { name: 'Corpus Christi', isHoliday: true },
  '2026-09-07': { name: 'Independência do Brasil', isHoliday: true },
  '2026-10-12': { name: 'Nossa Senhora Aparecida', isHoliday: true },
  '2026-10-28': { name: 'Dia do Servidor Público', isHoliday: true },
  '2026-11-02': { name: 'Finados', isHoliday: true },
  '2026-11-15': { name: 'Proclamação da República', isHoliday: true },
  '2026-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHoliday: true },
  '2026-12-24': { name: 'Véspera de Natal', isHoliday: true },
  '2026-12-25': { name: 'Natal', isHoliday: true },
  '2026-12-31': { name: 'Véspera de Ano-Novo', isHoliday: true },

  // Feriados de 2027
  '2027-01-01': { name: 'Confraternização Universal', isHoliday: true },
  '2027-02-08': { name: 'Carnaval', isHoliday: true },
  '2027-02-09': { name: 'Carnaval', isHoliday: true },
  '2027-02-10': { name: 'Quarta-feira de Cinzas', isHoliday: true },
  '2027-03-26': { name: 'Sexta-feira Santa', isHoliday: true },
  '2027-04-21': { name: 'Tiradentes', isHoliday: true },
  '2027-05-01': { name: 'Dia do Trabalhador', isHoliday: true },
  '2027-05-27': { name: 'Corpus Christi', isHoliday: true },
  '2027-09-07': { name: 'Independência do Brasil', isHoliday: true },
  '2027-10-12': { name: 'Nossa Senhora Aparecida', isHoliday: true },
  '2027-10-28': { name: 'Dia do Servidor Público', isHoliday: true },
  '2027-11-02': { name: 'Finados', isHoliday: true },
  '2027-11-15': { name: 'Proclamação da República', isHoliday: true },
  '2027-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHoliday: true },
  '2027-12-24': { name: 'Véspera de Natal', isHoliday: true },
  '2027-12-25': { name: 'Natal', isHoliday: true },
  '2027-12-31': { name: 'Véspera de Ano-Novo', isHoliday: true },

  // Feriados de 2028
  '2028-01-01': { name: 'Confraternização Universal', isHoliday: true },
  '2028-02-28': { name: 'Carnaval', isHoliday: true },
  '2028-02-29': { name: 'Carnaval', isHoliday: true },
  '2028-03-01': { name: 'Quarta-feira de Cinzas', isHoliday: true },
  '2028-04-14': { name: 'Sexta-feira Santa', isHoliday: true },
  '2028-04-21': { name: 'Tiradentes', isHoliday: true },
  '2028-05-01': { name: 'Dia do Trabalhador', isHoliday: true },
  '2028-06-15': { name: 'Corpus Christi', isHoliday: true },
  '2028-09-07': { name: 'Independência do Brasil', isHoliday: true },
  '2028-10-12': { name: 'Nossa Senhora Aparecida', isHoliday: true },
  '2028-10-28': { name: 'Dia do Servidor Público', isHoliday: true },
  '2028-11-02': { name: 'Finados', isHoliday: true },
  '2028-11-15': { name: 'Proclamação da República', isHoliday: true },
  '2028-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHoliday: true },
  '2028-12-24': { name: 'Véspera de Natal', isHoliday: true },
  '2028-12-25': { name: 'Natal', isHoliday: true },
  '2028-12-31': { name: 'Véspera de Ano-Novo', isHoliday: true },

  // Feriados de 2029
  '2029-01-01': { name: 'Confraternização Universal', isHoliday: true },
  '2029-02-12': { name: 'Carnaval', isHoliday: true },
  '2029-02-13': { name: 'Carnaval', isHoliday: true },
  '2029-02-14': { name: 'Quarta-feira de Cinzas', isHoliday: true },
  '2029-03-30': { name: 'Sexta-feira Santa', isHoliday: true },
  '2029-04-21': { name: 'Tiradentes', isHoliday: true },
  '2029-05-01': { name: 'Dia do Trabalhador', isHoliday: true },
  '2029-05-31': { name: 'Corpus Christi', isHoliday: true },
  '2029-09-07': { name: 'Independência do Brasil', isHoliday: true },
  '2029-10-12': { name: 'Nossa Senhora Aparecida', isHoliday: true },
  '2029-10-28': { name: 'Dia do Servidor Público', isHoliday: true },
  '2029-11-02': { name: 'Finados', isHoliday: true },
  '2029-11-15': { name: 'Proclamação da República', isHoliday: true },
  '2029-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHoliday: true },
  '2029-12-24': { name: 'Véspera de Natal', isHoliday: true },
  '2029-12-25': { name: 'Natal', isHoliday: true },
  '2029-12-31': { name: 'Véspera de Ano-Novo', isHoliday: true },
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
