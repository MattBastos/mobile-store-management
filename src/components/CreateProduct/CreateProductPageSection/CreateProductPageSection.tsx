'use client';

import { useState } from "react";
import { SimpleFormProductInfo } from "@/types";

import { CreateProductPageCard } from "@/components/CreateProduct";

import * as S from './styles';
import { SimpleProductForm } from "../CreateProductPageForms";

export const CreateProductPageSection = () => {
  const [message, setMessage] = useState("");
  const [isSimpleFormOpen, setIsSimpleFormOpen] = useState(false);
  const [simpleFormData, setSimpleFormData] = useState<SimpleFormProductInfo>({
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

  return (
    <S.Container>
      <SimpleProductForm
        isFormOpen={isSimpleFormOpen}
        isFormDataValid={!isFormDataValid()}
        closeForm={closeSimpleForm}
        onChange={handleChange}
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
