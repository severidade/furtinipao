export type LunchDataType = {
  id: number,
  headerLunch: {
    lunchTitle: string,
    figure:{
      image: string,
      altText?: string
    }
    lunchSubTitle: string,
  }
  lunchHours: string,
  paymentInfo: string,
};
