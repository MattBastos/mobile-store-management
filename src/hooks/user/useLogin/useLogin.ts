import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/api";

export const useLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");

    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData, [name]: value }));
  };

  const isFormDataValid = (): boolean => {
    const emailRegEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passwordMinLength = 6;

    const isValidEmail = !!formData.email.match(emailRegEx);
    const isValidPassword = formData.password.length >= passwordMinLength;

    return isValidEmail && isValidPassword;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(formData);
      if (response.token) router.push('/');
    }
    catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Credenciais inválidas. Por favor, verifique seu email e senha.");
    }
  };

  return {
    handleSubmit,
    handleChange,
    error,
    isFormDataValid
  };
};