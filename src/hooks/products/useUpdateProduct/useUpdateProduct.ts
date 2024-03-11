import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

import { getProductById, updateProduct } from "@/api";
import { UpdatableProductInfo } from "@/types";

export const useUpdateProduct = (productId: string) => {
  const [isUserValid, setIsUserValid] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<UpdatableProductInfo>({
    id: 0,
    name: "",
    brand: "",
    model: "",
    price: 0,
    color: ""
  });

  const [formData, setFormData] = useState<UpdatableProductInfo>({
    id: 0,
    name: "",
    brand: "",
    model: "",
    price: 0,
    color: ""
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
  
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormDataValid = () => {
    const { name, brand, model, price, color } = formData;
    return name.trim() !== "" && brand.trim() !== "" && model.trim() !== "" && price > 0 && color.trim() !== "";
  };

  const cancelEdition = () => router.push('/');

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const response = await getProductById(token, productId);
  
      if (response && response.data) {
        setIsUserValid(true);
        setSelectedProduct(response.data);
        setFormData(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  }

  const onUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await updateProduct(token, formData);

      if (response?.statusCode === 200) {
        setMessage("Produto atualizado com sucesso!");
      } else {
        setMessage("Você não possui autorização para editar produtos. Tente realizaro o login!");
      }
    } catch (error) {
      console.error(`Você não possui autorização para editar produtos: ${error}`);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return {
    isUserValid,
    isLoading,
    selectedProduct,
    onUpdate,
    formData,
    handleChange,
    message,
    isFormDataValid,
    cancelEdition
  }
};
