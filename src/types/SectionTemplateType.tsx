import { GallerySliderType } from './GallerySliderType.tsx';

export type SectionTemplateType = {
  id?: number; // Identificador único da seção

  header?: {
    title: string; // Título da seção
    subtitle?: string; // Subtítulo da seção (opcional)
    figure?: {
      url: string; // URL da imagem
      altText?: string; // Texto alternativo para acessibilidade (opcional)
    };
  };

  figure?: {
    url: string; // URL da imagem
    altText?: string; // Texto alternativo para acessibilidade (opcional)
  };

  content?: string;

  callToActionBt?: {
    phoneNumber: string; // Número de telefone para a ação do botão
    buttonTitle: string; // Título que irá ficar no botão
    message: string; // Mensagem a ser enviada na ação
    model: string; // Modelo do botão
  };

  schedule?: { // Horário de funcionamento e dias
    day: string;
    hours: string;
  }[];

  gallerySlider?: GallerySliderType[]; // Opcional

  characteristics?: {
    id: number;
    value: string;
  }[];
};
