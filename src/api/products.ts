import { axiosInstance } from "./axiosConfig";

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

export const deleteProduct = async (token: string | null, productId: number) => {
  try {
    const { status } = await axiosInstance.delete(
      `products/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );

    if (status === 200) {
      return 'Produto deletado com sucesso!';
    }

    return null;
  } catch (error) {
    `Erro ao deletar carro: ${error}`;
  }
};
