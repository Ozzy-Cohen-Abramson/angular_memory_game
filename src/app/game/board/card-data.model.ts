export interface CardData {
  breed: string;
  imageId: string;
  state: 'default' | 'flipped' | 'matched' | 'not-matched' | 'green-match';
}
