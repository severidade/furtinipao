export type GallerySliderType = {
  gallerySlider: {
    id: number;
    altText: string;
    image: string;
    breadName?: string, // somente no slider de pães tem o nome do pao
  }[];
};
