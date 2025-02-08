type ImageDataType = {
  url: string;
  altText?: string;
};

export type SectionHeroWelcomeType = {
  _id: string;
  title: string;
  subtitle: string;
  imagemDeFundo: {
    imagemMobile: ImageDataType;
    imagemDesktop: ImageDataType;
  };
};
