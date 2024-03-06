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

export type SimpleProduct = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

export type DetailedProduct = {
  name: string;
  details: {
    brand: string;
    model: string;
    color: string;
  };
  price: number;
};

export type ProductList = {
  name: string;
  brand: string;
  model: string;
  data: {
    price: number;
    color: string;
  }[];
};

export type UpdatableProductInfo = Omit<Product, 'createdAt' | 'updatedAt'>;

export type DeletableProductInfo  = Pick<Product, 'id' | 'name' | 'model'>;
