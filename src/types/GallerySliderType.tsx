// export type GallerySliderType = {
//   id: number;
//   altText: string;
//   image: string;
//   breadName?: string; // este campo é opcional
// };

export type GallerySliderType = {
  // breadName: string;
  // image: {
  //   asset: {
  //     url: string;
  //   };
  //   altText: string;
  // };

  breadName: string;
  image: {
    url: string;
    altText: string;
  };
};
