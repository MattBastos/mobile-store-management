import { useState } from "react";
import { SimpleProduct } from "@/types";
import { createSimpleProduct } from "@/api";

export const useCreateSimpleProduct = () => {
  const [simpleFormMessage, setSimpleFormMessage] = useState("");
  const [isSimpleFormOpen, setIsSimpleFormOpen] = useState(false);
  const [simpleFormData, setSimpleFormData] = useState<SimpleProduct>({
    name: "",
    brand: "",
    model: "",
    price: 0,
    color: ""
  });

  const simpleStructure = [
    "Nome", "Marca", "Modelo", "Preço", "Cor"
  ];

  const openSimpleForm = () => setIsSimpleFormOpen(true);
  const closeSimpleForm = () => setIsSimpleFormOpen(false);

  const simpleFormHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSimpleFormMessage("");
  
    const { name, value } = e.target;
    setSimpleFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isSimpleFormDataValid = () => {
    const { name, brand, model, price, color } = simpleFormData;
    return name.trim() !== "" && brand.trim() !== "" && model.trim() !== "" && price > 0 && color.trim() !== "";
  };

  const onCreateSimpleProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await createSimpleProduct(token, simpleFormData);

      if (response?.statusCode === 201) {
        setSimpleFormMessage("Produto criado com sucesso!");
      } else {
        setSimpleFormMessage("Você não possui autorização para criar produtos. Tente realizaro o login!");
      }
    } catch (error) {
      console.error(`Você não possui autorização para criar produtos: ${error}`);
    }
  };

  return {
    simpleFormMessage,
    isSimpleFormOpen,
    isSimpleFormDataValid,
    closeSimpleForm,
    simpleFormHandleChange,
    onCreateSimpleProduct,
    simpleStructure,
    openSimpleForm
  }
};
