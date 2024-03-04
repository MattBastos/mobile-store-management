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

export const registerUser = async () => {};
