import { UpdatableProductInfo } from "@/types";
import { axiosInstance } from "./axiosConfig";

export const getProductById = async (token: string | null, productId: string) => {
  try {
    const response = await axiosInstance.get(
      `products/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return response;
  } catch (error) {
    console.error(`Erro ao buscar produto: ${error}`);
  }
}

export const getProducts = async (token: string | null) => {
  try {
    const response = await axiosInstance.get(
      'products',
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return response;
  } catch (error) {
    console.error(`Erro ao buscar produtos: ${error}`);
  }
};

export const updateProduct = async (
  token: string | null,
  { id, ...product }: UpdatableProductInfo
) => {
  try {
    const { status } = await axiosInstance.put(
      `products/${id}`,
      product,
      { headers: { Authorization: `Bearer ${token}` } },
    );

    if (status === 200) {
      return {
        statusCode: status,
        message: 'Produto editado com sucesso!'
      }
    }

    if (status === 401) {
      return {
        statusCode: status,
        message: 'Você não possui autorização para editar produtos!'
      }
    }
  } catch (error) {
    `Erro ao editar produto: ${error}`;
  }
}

export const deleteProduct = async (
  token: string | null,
  productId: number
) => {
  try {
    const { status } = await axiosInstance.delete(
      `products/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );

    if (status === 200) return 'Produto deletado com sucesso!';

    if (status === 401) return 'Você não possui autorização para deletar produtos!';
  } catch (error) {
    `Erro ao deletar produto: ${error}`;
  }
};
