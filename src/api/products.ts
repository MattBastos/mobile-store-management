import { axiosInstance } from "./axiosConfig";

export const getProducts = async (token: string | null) => {
  try {
    const { data } = await axiosInstance.get(
      'products',
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return data;
  } catch (error) {
    console.error(`Erro ao buscar produtos: ${error}`);
  }
};
