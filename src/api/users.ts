import { axiosInstance } from "./axiosConfig";
import { User } from "@/types";

export const login = async (formData: Omit<User, 'username'>) => {
  try {
    const { data } = await axiosInstance.post('/login', formData);
    return data;
  } catch (error) {
    console.error(`Erro ao efetuar login: ${error}`);
  }
};

export const createUser = async (userData: User) => {
  try {
    const { data } = await axiosInstance.post('/register', userData);
    return data;
  } catch (error) {
    console.error(`Erro ao criar novo usuário: ${error}`);
  }
}

export const validateUser = async (token: string | null) => {
  try {
    const { status } = await axiosInstance.get(
      '/validateUser',
      { headers: { Authorization: `Bearer ${token}` } },
    );

    if (status === 200) {
      return {
        statusCode: status,
        message: 'Usuário válido!'
      }
    }

    if (status === 401) {
      return {
        statusCode: status,
        message: 'Você não possui autorização para acessar a página!'
      }
    }
  } catch (error) {
    console.error(`Erro ao acessar página: ${error}`);
  }
}

export const registerUser = async () => {};
