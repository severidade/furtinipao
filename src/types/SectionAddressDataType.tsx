export type SectionAddressDataType = {
  id: number,
  headerAddress: {
    addressTitle: string,
    addressDetails: string,
  }
  accessibility: string,
  petFriendly: string,
  slider: {
    id: number,
    altText: string,
    image: string,
  }[]
};
