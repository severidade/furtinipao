// src/types/PageDataTypes.ts

// Interfaces comuns reutilizáveis
export interface Figure {
  url: string | null;
  altText: string | null;
}
export interface Header {
  title: string;
  subtitle?: string | null;
  figure?: Figure | null;
}

export interface CallToActionBt {
  model?: string;
  buttonTitle: string;
  phoneNumber: string;
  message: string;
}

// Interfaces específicas para cada seção
export interface SectionHeroWelcomeType {
  _id: string;
  title: string;
  subtitle: string;
  backgroundImage: {
    imagemMobile: { url: string; altText: string };
    imagemDesktop: { url: string; altText: string | null };
  };
}

export interface LunchType {
  id: null;
  header: Header;
  content: string;
}

export interface BreadType {
  breadName: string;
  image: {
    url: string;
    altText: string;
  };
}

export interface BreadsType {
  header: Header;
  content: string;
  callToActionBt: CallToActionBt;
  gallerySlider: BreadType[];
}

export interface AddressType {
  header: Header;
  content: Array<{
    level: number;
    _type: string;
    style: string;
    _key: string;
    listItem: string;
    children: Array<{ text: string }>;
  }>;
  gallerySlider: Array<{
    image: {
      _id: string;
      url: string;
      altText: string | null;
    };
  }>;
}

export interface OpeningHoursType {
  header: Header;
  subtitle: string | null;
  content: string | null;
  videoSection: {
    videoUrl: string;
    poster: {
      url: string;
      altText: string;
    };
  };
  callToActionBt: CallToActionBt;
}
export interface HistoryType {
  figure: Figure;
  header: Header;
  content: string;
}

export interface EventsType {
  figure: Figure;
  header: Header;
  content: string;
  callToActionBt: CallToActionBt;
}

export interface SectionTemplateType {
  figure: Figure;
  header: Header;
  content: string;
  callToActionBt?: CallToActionBt;
}

export interface HighlightGalleryType {
  gallerySlider: Array<{
    _id: string;
    url: string;
    altText: string;
    title: string;
  }>;
}

export interface WhatsAppButtonType {
  phoneNumber: string;
  message: string;
}

export interface PageData {
  heroWelcome: SectionHeroWelcomeType[];
  lunch: LunchType[];
  breads: BreadsType[];
  address: AddressType[];
  openingHours: OpeningHoursType[];
  history: HistoryType[];
  events: EventsType[];
  highlightGallery: HighlightGalleryType[];
  whatsAppButton: WhatsAppButtonType[];
  sectionTemplateType: SectionTemplateType[];
}
