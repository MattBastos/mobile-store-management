export type Product = {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export type ProductNameAndModel = Pick<Product, 'id' | 'name' | 'model'>;
