import { useState, useEffect} from "react";
import { createDetailedProduct } from "@/api";
import { DetailedProduct } from "@/types";

export const useCreateDetailedProduct = () => {
  const [detailedFormMessage, setDetailedFormMessage] = useState("");
  const [isDetailedFormOpen, setIsDetailedFormOpen] = useState(false);
  const [detailedFormData, setDetailedFormData] = useState<DetailedProduct>({
    name: "",
    details: {
      brand: "",
      model: "",
      color: ""
    },
    price: 0,
  });

  const detailedStructure = [
    "Nome", "Detalhes: Marca, Modelo, Cor...", "Preço"
  ];

  const openDetailedForm = () => setIsDetailedFormOpen(true);
  const closeDetailedForm = () => setIsDetailedFormOpen(false);

  const detailedFormHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailedFormMessage("");
  
    const { name, value } = e.target;
  
    if (name === 'name' || name === 'price') {
      setDetailedFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setDetailedFormData((prevData) => ({
        ...prevData,
        details: {
          ...prevData.details,
          [name]: value,
        },
      }));
    }
  };

  const isDetailedFormDataValid = () => {
    const { name, details: { brand, model, color }, price } = detailedFormData;
    return name.trim() !== "" && brand.trim() !== "" && model.trim() !== "" && price > 0 && color.trim() !== "";
  };

  const onCreateDetailedProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await createDetailedProduct(token, detailedFormData);

      if (response?.statusCode === 201) {
        setDetailedFormMessage("Produto criado com sucesso!");

        setTimeout(() => {
          setDetailedFormMessage("");
        }, 3000);
      } else {
        setDetailedFormMessage("Você não possui autorização para criar produtos. Tente realizaro o login!");
      }
    } catch (error) {
      console.error(`Você não possui autorização para criar produtos: ${error}`);
    }
  };

  return {
    detailedFormMessage,
    isDetailedFormOpen,
    isDetailedFormDataValid,
    closeDetailedForm,
    detailedFormHandleChange,
    onCreateDetailedProduct,
    detailedStructure,
    openDetailedForm
  };
};
