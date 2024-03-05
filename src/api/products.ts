import { axiosInstance } from "./axiosConfig";

export const getProducts = async () => {
  try {
    const token = localStorage.getItem('token')

    const { data } = await axiosInstance.get(
      'products',
      { headers: { Authorization: `Bearer: ${token}` } },
    );

    return data;
  } catch (error) {
    console.error(`Erro ao buscar produtos: ${error}`);
  }
};
