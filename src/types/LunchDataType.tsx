export type LunchDataType = {
  id: number,
  headerLunch: {
    lunchTitle: string,
    figure:{
      image: string,
      altText?: string
    }
    lunchHours: string,
  }
  paymentInfo: string,
};
