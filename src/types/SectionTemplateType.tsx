export type SectionTemplateType = {
  id: number; // Identificador único da seção
  figure: {
    url: string; // URL da imagem
    altText?: string; // Texto alternativo para acessibilidade (opcional)
  };
  header: {
    title: string; // Título da seção
    subtitle?: string; // Subtítulo da seção (opcional)
  };
  content: string,
  callToActionBt?: {
    phoneNumber: string; // Número de telefone para a ação do botão
    message: string; // Mensagem a ser enviada na ação
  };
};
