import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '@/api';

export const useRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");

    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData, [name]: value }));
  };

  const isFormDataValid = (): boolean => {
    const usernameMinLength = 5;
    const emailRegEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passwordMinLength = 6;

    const isValidName = formData.username.length >= usernameMinLength;
    const isValidEmail = !!formData.email.match(emailRegEx);
    const isValidPassword = formData.password.length >= passwordMinLength;

    return isValidName && isValidEmail && isValidPassword;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await createUser(formData);
      if (response.token) router.push('/');
    }
    catch (error) {
      console.error("Erro ao criar novo usuário:", error);
      setError("Os campos devem ter dados válidos.");
    }
  };

  return {
    handleSubmit,
    handleChange,
    error,
    isFormDataValid
  }
};