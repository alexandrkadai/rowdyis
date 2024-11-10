export type iCart = {
  userID: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    sizeItem: string;
    quantity: number;
  }>;
};
