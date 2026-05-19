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

// export const operatingHoursByDay: OperatingHoursByDay = {
//   0: { open: 9, close: 14 }, // Domingo
//   1: false, // Segunda nao funciona
//   2: { open: 10, close: 21 }, // Terça
//   3: { open: 10, close: 21 }, // Quarta
//   4: { open: 10, close: 21 }, // Quinta
//   5: { open: 10, close: 21 }, // Sexta
//   6: { open: 9, close: 20 }, // Sábado
// };
export const operatingHoursByDay: OperatingHoursByDay = {
  0: false, // Domingo
  1: false, // Segunda
  2: false, // Terça
  3: { open: 10, close: 18 }, // Quarta
  4: { open: 10, close: 18 }, // Quinta
  5: { open: 10, close: 18 }, // Sexta
  6: { open: 10, close: 14 }, // Sábado
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
  '2025-01-01': { name: 'Confraternização Universal', isHolidayOpen: false },
  '2025-03-03': { name: 'Carnaval', isHolidayOpen: false },
  '2025-03-04': { name: 'Carnaval', isHolidayOpen: false },
  '2025-03-05': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2025-04-18': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2025-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2025-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2025-06-19': { name: 'Corpus Christi', isHolidayOpen: true },
  '2025-08-15': { name: '* Assunção de Nossa Senhora', isHolidayOpen: true },
  '2025-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2025-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2025-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2025-11-02': { name: 'Finados', isHolidayOpen: true },
  '2025-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2025-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2025-12-08': { name: '* Dia da Nossa Senhora Imaculada Conceição', isHolidayOpen: true },
  '2025-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2025-12-25': { name: 'Natal', isHolidayOpen: false },
  '2025-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },

  // Feriados de 2026
  '2026-01-01': { name: 'Confraternização Universal', isHolidayOpen: false },
  '2026-02-16': { name: 'Carnaval', isHolidayOpen: false },
  '2026-02-17': { name: 'Carnaval', isHolidayOpen: false },
  '2026-02-18': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2026-04-03': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2026-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2026-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2026-06-04': { name: 'Corpus Christi', isHolidayOpen: true },
  '2026-08-15': { name: '* Assunção de Nossa Senhora', isHolidayOpen: true },
  '2026-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2026-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2026-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2026-11-02': { name: 'Finados', isHolidayOpen: true },
  '2026-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2026-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2026-12-08': { name: '* Dia da Nossa Senhora Imaculada Conceição', isHolidayOpen: true },
  '2026-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2026-12-25': { name: 'Natal', isHolidayOpen: false },
  '2026-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },

  // Feriados de 2027
  '2027-01-01': { name: 'Confraternização Universal', isHolidayOpen: false },
  '2027-02-08': { name: 'Carnaval', isHolidayOpen: false },
  '2027-02-09': { name: 'Carnaval', isHolidayOpen: false },
  '2027-02-10': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2027-03-26': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2027-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2027-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2027-05-27': { name: 'Corpus Christi', isHolidayOpen: true },
  '2027-08-15': { name: '* Assunção de Nossa Senhora', isHolidayOpen: true },
  '2027-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2027-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2027-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2027-11-02': { name: 'Finados', isHolidayOpen: true },
  '2027-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2027-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2027-12-08': { name: '* Dia da Nossa Senhora Imaculada Conceição', isHolidayOpen: true },
  '2027-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2027-12-25': { name: 'Natal', isHolidayOpen: false },
  '2027-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },

  // Feriados de 2028
  '2028-01-01': { name: 'Confraternização Universal', isHolidayOpen: false },
  '2028-02-28': { name: 'Carnaval', isHolidayOpen: false },
  '2028-02-29': { name: 'Carnaval', isHolidayOpen: false },
  '2028-03-01': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2028-04-14': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2028-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2028-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2028-06-15': { name: 'Corpus Christi', isHolidayOpen: true },
  '2028-08-15': { name: '* Assunção de Nossa Senhora', isHolidayOpen: true },
  '2028-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2028-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2028-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2028-11-02': { name: 'Finados', isHolidayOpen: true },
  '2028-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2028-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2028-12-08': { name: '* Dia da Nossa Senhora Imaculada Conceição', isHolidayOpen: true },
  '2028-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2028-12-25': { name: 'Natal', isHolidayOpen: false },
  '2028-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },

  // Feriados de 2029
  '2029-01-01': { name: 'Confraternização Universal', isHolidayOpen: false },
  '2029-02-12': { name: 'Carnaval', isHolidayOpen: false },
  '2029-02-13': { name: 'Carnaval', isHolidayOpen: false },
  '2029-02-14': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2029-03-30': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2029-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2029-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2029-05-31': { name: 'Corpus Christi', isHolidayOpen: true },
  '2029-08-15': { name: '* Assunção de Nossa Senhora', isHolidayOpen: true },
  '2029-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2029-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2029-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2029-11-02': { name: 'Finados', isHolidayOpen: true },
  '2029-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2029-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2029-12-08': { name: '* Dia da Nossa Senhora Imaculada Conceição', isHolidayOpen: true },
  '2029-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2029-12-25': { name: 'Natal', isHolidayOpen: false },
  '2029-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },

  // Feriados de 2030
  '2030-01-01': { name: 'Confraternização Universal', isHolidayOpen: false },
  '2030-03-04': { name: 'Carnaval', isHolidayOpen: false },
  '2030-03-05': { name: 'Carnaval', isHolidayOpen: false },
  '2030-03-06': { name: 'Quarta-feira de Cinzas', isHolidayOpen: true },
  '2030-04-19': { name: 'Sexta-feira Santa', isHolidayOpen: true },
  '2030-04-21': { name: 'Tiradentes', isHolidayOpen: true },
  '2030-05-01': { name: 'Dia do Trabalhador', isHolidayOpen: true },
  '2030-06-20': { name: 'Corpus Christi', isHolidayOpen: true },
  '2030-08-15': { name: '* Assunção de Nossa Senhora', isHolidayOpen: true },
  '2030-09-07': { name: 'Independência do Brasil', isHolidayOpen: true },
  '2030-10-12': { name: 'Nossa Senhora Aparecida', isHolidayOpen: true },
  '2030-10-28': { name: 'Dia do Servidor Público', isHolidayOpen: true },
  '2030-11-02': { name: 'Finados', isHolidayOpen: true },
  '2030-11-15': { name: 'Proclamação da República', isHolidayOpen: true },
  '2030-11-20': { name: 'Dia Nacional de Zumbi e da Consciência Negra', isHolidayOpen: true },
  '2030-12-08': { name: '* Dia da Nossa Senhora Imaculada Conceição', isHolidayOpen: true },
  '2030-12-24': { name: 'Véspera de Natal', isHolidayOpen: true },
  '2030-12-25': { name: 'Natal', isHolidayOpen: false },
  '2030-12-31': { name: 'Véspera de Ano-Novo', isHolidayOpen: true },
};

// Função auxiliar para obter o nome do dia da semana
const getDayName = (dayIndex: number): string => {
  const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  return days[dayIndex];
};

export const getScheduleStatus = (): ScheduleStatus => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  const fullDate = now.toISOString().split('T')[0]; // Data no formato yyyy-mm-dd
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTime = currentHour + currentMinutes / 60;

  // Verifica se hoje é um feriado e se está aberto
  const isHoliday = holidays[fullDate] !== undefined;
  const isHolidayOpen = holidays[fullDate]?.isHolidayOpen || false;

  // Obtém o horário de funcionamento do dia normal
  let operatingHours: OperatingHours | false = operatingHoursByDay[dayOfWeek];

  // Se for feriado, ajusta o horário conforme a configuração
  if (isHoliday) {
    operatingHours = isHolidayOpen ? operatingHoursByHoliday : false;
  }

  // console.log(`Hoje é ${getDayName(dayOfWeek)}.`);
  // console.log(`Feriado: ${isHoliday}, Aberto no feriado: ${isHolidayOpen}`);
  // console.log(`Horário de funcionamento: ${JSON.stringify(operatingHours)}`);

  // Se ainda não abriu, informa o horário de abertura
  if (operatingHours && currentTime < operatingHours.open) {
    return {
      status: 'Fechado ',
      message: `Abrirá hoje às ${operatingHours.open}h.`,
    };
  }

  // Se já fechou ou não há horário de funcionamento, busca o próximo dia aberto
  if (!operatingHours || currentTime >= operatingHours.close) {
    // Inicialização para buscar o próximo dia disponível
    let daysToAdd = 1;
    let nextOpenDay = (dayOfWeek + daysToAdd) % 7;

    // Para formar as próximas datas, vamos usar o formato da data original
    // e incrementar conforme necessário
    const dateParts = fullDate.split('-').map(Number);
    let nextDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2] + daysToAdd);
    let nextFullDate = nextDate.toISOString().slice(0, 10);

    // Verificar disponibilidade
    let isNextDayAvailable = false;

    while (!isNextDayAvailable) {
      const isNextDayHoliday = holidays[nextFullDate] !== undefined;

      // Verifica se o dia está disponível
      if (isNextDayHoliday) {
        // Se for feriado, verifica se está aberto
        isNextDayAvailable = holidays[nextFullDate].isHolidayOpen;
      } else {
        // Se não for feriado, verifica se o dia da semana tem funcionamento
        isNextDayAvailable = operatingHoursByDay[nextOpenDay] !== false;
      }

      if (!isNextDayAvailable) {
        // Avança para o próximo dia
        daysToAdd++;
        nextOpenDay = (dayOfWeek + daysToAdd) % 7;
        nextDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2] + daysToAdd);
        nextFullDate = nextDate.toISOString().slice(0, 10);
      }
    }

    // Define o horário de abertura para o próximo dia aberto
    const nextOperatingHours = holidays[nextFullDate]?.isHolidayOpen
      ? operatingHoursByHoliday
      : operatingHoursByDay[nextOpenDay];

    return {
      status: 'Fechado ',
      message: `Abre ${getDayName(nextOpenDay)} às ${nextOperatingHours?.open}h.`,
    };
  }

  // Caso esteja aberto no horário atual
  return {
    status: 'Aberto ',
    message: `Estamos funcionando até às ${operatingHours?.close}h.`,
  };
};

// https://api.invertexto.com/
// API que gera a lista de feriados
