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
