export type SectionTemplateType = {
  id?: number; // Identificador único da seção
  figure?: {
    url: string; // URL da imagem
    altText?: string; // Texto alternativo para acessibilidade (opcional)
  };
  header?: {
    title?: string; // Título da seção
    subtitle?: string; // Subtítulo da seção (opcional)
  };
  content?: string,
  callToActionBt?: {
    phoneNumber: string; // Número de telefone para a ação do botão
    buttonTitle: string // Título que irá ficar no botão
    message: string; // Mensagem a ser enviada na ação
    model: string // Modelo do botão
  };
  schedule?: { // Horário de funcionamento e dias
    day: string;
    hours: string;
  }[];
  gallerySlider: { // Todos os Slider tem esse padrão
    id: number;
    altText: string;
    image: string;
    breadName?: string, // somente no slider de pães tem o nome do pao
  }[];
  characteristics?: {
    id: number,
    value: string,
  }[];
};
