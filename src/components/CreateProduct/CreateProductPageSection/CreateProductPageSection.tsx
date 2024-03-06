'use client';

import { useState, useEffect} from "react";
import { useCreateDetailedProduct, useCreateSimpleProduct } from "@/hooks";
import { validateUser } from "@/api";
import { FormattedProduct, SimpleProduct } from "@/types";

import {
  CreateProductPageCard,
  SimpleProductForm,
  DetailedProductForm,
  BulkProductForm
} from "@/components/CreateProduct";
import { InvalidUserMessage } from "@/components/InvalidUserMessage";

import * as S from './styles';

export const CreateProductPageSection = () => {
  const [isUserValid, setIsUserValid] = useState(false);
  const [bulkFormMessage, setBulkFormMessage] = useState("");
  const [isBulkFormOpen, setIsBulkFormOpen] = useState(false);
  const [simpleProducts, setSimpleProducts] = useState<SimpleProduct[]>([]);
  const [formattedProducts, setFormattedProducts] = useState<FormattedProduct[]>([]);
  const [bulkFormData, setBulkFormData] = useState<SimpleProduct>({
    name: "",
    brand: "",
    model: "",
    price: 0,
    color: ""
  });

  const manyProductsStructure = [
    "Nome", "Marca", "Modelo", "Cores e Preços"
  ];

  const openBulkForm = () => setIsBulkFormOpen(true);
  const closeBulkForm = () => setIsBulkFormOpen(false);

  const bulkFormHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBulkFormMessage("");
  
    const { name, value } = e.target;
    setBulkFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isBulkFormDataValid = () => {
    const { name, brand, model, price, color } = bulkFormData;
    return name.trim() !== "" && brand.trim() !== "" && model.trim() !== "" && price > 0 && color.trim() !== "";
  };

  const addProduct = (e: React.FormEvent) => {
    e.preventDefault();

    setBulkFormMessage("Produto adicionado com sucesso!");
    setSimpleProducts((prevState) => [...prevState, bulkFormData]);

    setTimeout(() => {
      setBulkFormMessage("");
    }, 3000);
  }

  ////////////////////////////////////////////////////////////

  const {
    simpleFormMessage,
    isSimpleFormOpen,
    isSimpleFormDataValid,
    closeSimpleForm,
    simpleFormHandleChange,
    onCreateSimpleProduct,
    simpleStructure,
    openSimpleForm
  } = useCreateSimpleProduct();

  const {
    detailedFormMessage,
    isDetailedFormOpen,
    isDetailedFormDataValid,
    closeDetailedForm,
    detailedFormHandleChange,
    onCreateDetailedProduct,
    detailedStructure,
    openDetailedForm
  } = useCreateDetailedProduct();

  const validateToken = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      const response = await validateUser(token);

      if (response && response.statusCode === 200) {
        setIsUserValid(true);
      } else {
        setIsUserValid(false);
      }
    }
  }

  useEffect(() => {
    validateToken()
  }, []);

  return (
    <S.Container>
      <InvalidUserMessage isUserValid={isUserValid}/>

      {isUserValid && (
        <>
          <SimpleProductForm
            message={simpleFormMessage}
            isFormOpen={isSimpleFormOpen}
            isFormDataValid={!isSimpleFormDataValid()}
            closeForm={closeSimpleForm}
            onChange={simpleFormHandleChange}
            onSubmit={onCreateSimpleProduct}
          />

          <DetailedProductForm
            message={detailedFormMessage}
            isFormOpen={isDetailedFormOpen}
            isFormDataValid={!isDetailedFormDataValid()}
            closeForm={closeDetailedForm}
            onChange={detailedFormHandleChange}
            onSubmit={onCreateDetailedProduct}
          />

          <BulkProductForm
            formMessage={bulkFormMessage}
            isFormOpen={isBulkFormOpen}
            isFormDataValid={!isBulkFormDataValid()}
            closeForm={closeBulkForm}
            onChange={bulkFormHandleChange}
            onConfirm={addProduct}
            simpleProducts={simpleProducts}
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
            onClick={openDetailedForm}
          />

          <CreateProductPageCard
            title="Criar Produtos"
            description="Crie vários produtos de uma vez."
            productStructure={manyProductsStructure}
            onClick={openBulkForm}
          />
        </>
      )}
    </S.Container>
  );
};
