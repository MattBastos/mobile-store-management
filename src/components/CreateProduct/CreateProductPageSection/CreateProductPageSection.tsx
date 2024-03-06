'use client';

import { useState } from "react";
import { SimpleProduct } from "@/types";
import { createSimpleProduct } from "@/api";

import { CreateProductPageCard } from "@/components/CreateProduct";
import { SimpleProductForm } from "@/components/CreateProduct/CreateProductPageForms";

import * as S from './styles';

export const CreateProductPageSection = () => {
  const [message, setMessage] = useState("");
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

  const detailedStructure = [
    "Nome", "Detalhes: Marca, Modelo, Cor...", "Preço"
  ];

  const manyProductsStructure = [
    "Nome", "Marca", "Modelo", "Cores e Preços"
  ];

  const openSimpleForm = () => setIsSimpleFormOpen(true);
  const closeSimpleForm = () => setIsSimpleFormOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
  
    const { name, value } = e.target;
    setSimpleFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormDataValid = () => {
    const { name, brand, model, price, color } = simpleFormData;
    return name.trim() !== "" && brand.trim() !== "" && model.trim() !== "" && price > 0 && color.trim() !== "";
  };

  const onCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await createSimpleProduct(token, simpleFormData);

      if (response?.statusCode === 201) {
        setMessage("Produto criado com sucesso!");
      } else {
        setMessage("Você não possui autorização para criar produtos. Tente realizaro o login!");
      }
    } catch (error) {
      console.error(`Você não possui autorização para criar produtos: ${error}`);
    }
  };

  return (
    <S.Container>
      <SimpleProductForm
        message={message}
        isFormOpen={isSimpleFormOpen}
        isFormDataValid={!isFormDataValid()}
        closeForm={closeSimpleForm}
        onChange={handleChange}
        onClick={onCreate}
      />

      <CreateProductPageCard
        title="Produto Simples"
        description="Crie um produto de forma rápida e fácil."
        productStructure={simpleStructure}
        onClick={openSimpleForm}
      />

      <CreateProductPageCard
        title="Produto Detalhado"
        description="Crie um produto com informações detalhadas."
        productStructure={detailedStructure}
        onClick={() => {}}
      />

      <CreateProductPageCard
        title="Criar Produtos"
        description="Crie vários produtos de uma vez."
        productStructure={manyProductsStructure}
        onClick={() => {}}
      />
    </S.Container>
  );
};
