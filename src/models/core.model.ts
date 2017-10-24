export const API_URL = "";
export const OmiseKey = "";

export interface ReviewsModel {
  topic: string;
  comment: string;
  rate: number;
  created: Date;
  user: any;
}