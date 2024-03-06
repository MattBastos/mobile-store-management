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

export type UpdatableProductInfo = Omit<Product, 'createdAt' | 'updatedAt'>;

export type DeletableProductInfo  = Pick<Product, 'id' | 'name' | 'model'>;
