export interface CurrentUser {
  userName: string;
}

export interface Word {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  englishWordID: number;
  category?: string;
}
