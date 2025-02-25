export interface ScheduleStatus {
  status: string;
  message: string;
}
export interface OperatingHours {
  open: number;
  close: number;
}
export interface OperatingHoursByDay {
  [key: number]: OperatingHours | false;
}

export const operatingHoursByDay: OperatingHoursByDay = {
  0: { open: 9, close: 14 }, // Domingo
  1: false, // Segunda nao funciona
  2: { open: 10, close: 20 }, // Terça
  3: { open: 10, close: 20 }, // Quarta
  4: { open: 10, close: 20 }, // Quinta
  5: { open: 10, close: 20 }, // Sexta
  6: { open: 9, close: 20 }, // Sábado
};
interface Holiday {
  name: string;
  isHolidayOpen: boolean;
}

export const operatingHoursByHoliday: OperatingHours = {
  open: 9, close: 20,
};

interface Holidays {
  [key: string]: Holiday;
}

const holidays: Holidays = {
  '2025-02-25': { name: 'teste como feriado', isHolidayOpen: true },
  '2025-02-26': { name: 'Quarta Feira de Cinzas', isHolidayOpen: true },

  '2025-01-01': { name: 'Confraternização Universal', isHolidayOpen: true },
  '2025-03-03': { name: 'Carnaval', isHolidayOpen: true },
  '2025-03-04': { name: 'Carnaval', isHolidayOpen: true },
  '2025-03-05': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2025-04-18': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2025-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2025-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2025-06-19': { name: 'Corpus Christi', isHolidayOpen: true },
  '2025-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2025-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2025-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2025-11-02': { name: 'Finados', isHolidayOpen: true },
  '2025-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2025-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2025-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2025-12-25': { name: 'Natal', isHolidayOpen: true },
  '2025-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },

  // Feriados de 2026
  '2026-01-01': { name: 'Confraternização Universal', isHolidayOpen: true },
  '2026-02-16': { name: 'Carnaval', isHolidayOpen: true },
  '2026-02-17': { name: 'Carnaval', isHolidayOpen: true },
  '2026-02-18': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2026-04-03': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2026-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2026-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2026-06-04': { name: 'Corpus Christi', isHolidayOpen: true },
  '2026-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2026-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2026-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2026-11-02': { name: 'Finados', isHolidayOpen: true },
  '2026-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2026-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2026-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2026-12-25': { name: 'Natal', isHolidayOpen: true },
  '2026-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },

  // Feriados de 2027
  '2027-01-01': { name: 'Confraternização Universal', isHolidayOpen: true },
  '2027-02-08': { name: 'Carnaval', isHolidayOpen: true },
  '2027-02-09': { name: 'Carnaval', isHolidayOpen: true },
  '2027-02-10': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2027-03-26': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2027-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2027-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2027-05-27': { name: 'Corpus Christi', isHolidayOpen: true },
  '2027-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2027-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2027-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2027-11-02': { name: 'Finados', isHolidayOpen: true },
  '2027-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2027-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2027-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2027-12-25': { name: 'Natal', isHolidayOpen: true },
  '2027-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },

  // Feriados de 2028
  '2028-01-01': { name: 'Confraternização Universal', isHolidayOpen: true },
  '2028-02-28': { name: 'Carnaval', isHolidayOpen: true },
  '2028-02-29': { name: 'Carnaval', isHolidayOpen: true },
  '2028-03-01': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2028-04-14': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2028-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2028-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2028-06-15': { name: 'Corpus Christi', isHolidayOpen: true },
  '2028-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2028-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2028-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2028-11-02': { name: 'Finados', isHolidayOpen: true },
  '2028-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2028-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2028-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2028-12-25': { name: 'Natal', isHolidayOpen: true },
  '2028-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },

  // Feriados de 2029
  '2029-01-01': { name: 'Confraternização Universal', isHolidayOpen: true },
  '2029-02-12': { name: 'Carnaval', isHolidayOpen: true },
  '2029-02-13': { name: 'Carnaval', isHolidayOpen: true },
  '2029-02-14': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2029-03-30': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2029-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2029-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2029-05-31': { name: 'Corpus Christi', isHolidayOpen: true },
  '2029-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2029-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2029-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2029-11-02': { name: 'Finados', isHolidayOpen: true },
  '2029-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2029-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2029-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2029-12-25': { name: 'Natal', isHolidayOpen: true },
  '2029-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },
};

// Função auxiliar para obter o nome do dia da semana
const getDayName = (dayIndex: number): string => {
  const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  return days[dayIndex];
};

export const getScheduleStatus = (): ScheduleStatus => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  const fullDate = now.toISOString().split('T')[0]; // Retorna data formatada com yyyy-mm-dd
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTime = currentHour + currentMinutes / 60;

  const isHoliday = holidays[fullDate] !== undefined;
  const isHolidayOpen = holidays[fullDate]?.isHolidayOpen || false;
  const operatingHoursToday = operatingHoursByDay[dayOfWeek];

  let operatingHours: OperatingHours | false = operatingHoursToday;
  if (isHoliday) {
    operatingHours = isHolidayOpen ? operatingHoursByHoliday : false;
  }

  console.log(`Horário de funcionamento sem considerar feriado: ${JSON.stringify(operatingHoursToday)}`);
  console.log(`Verifica se no dia é feriado: ${isHoliday}, está aberto: ${isHolidayOpen}`);
  console.log(`Hoje é ${getDayName(dayOfWeek)} e o horário de funcionamento é de ${JSON.stringify(operatingHours?.open)} às ${JSON.stringify(operatingHours?.close)}`);

  if (!operatingHours || (operatingHours !== false && currentTime >= operatingHours.close)) {
    let nextOpenDay = (dayOfWeek + 1) % 7;
    const nextDate = new Date(now);
    nextDate.setDate(now.getDate() + 1);
    let nextFullDate = nextDate.toISOString().split('T')[0];

    while (
      operatingHoursByDay[nextOpenDay] === false
      || (holidays[nextFullDate] && !holidays[nextFullDate]?.isHolidayOpen)
    ) {
      nextOpenDay = (nextOpenDay + 1) % 7;
      nextDate.setDate(nextDate.getDate() + 1);
      nextFullDate = nextDate.toISOString().split('T')[0];
    }

    const nextOperatingHours = holidays[nextFullDate]?.isHolidayOpen
      ? operatingHoursByHoliday
      : operatingHoursByDay[nextOpenDay];

    return {
      status: 'Fechado ',
      message: `Abre ${getDayName(nextOpenDay)} às ${nextOperatingHours?.open}h.`,
    };
  }

  return {
    status: 'Aberto ',
    message: `Estamos funcionando até às ${operatingHours?.close}h.`,
  };
};
