'use client';

import { useState, useEffect} from "react";
import { useCreateSimpleProduct } from "@/hooks";
import { validateUser } from "@/api";

import { CreateProductPageCard } from "@/components/CreateProduct";
import { SimpleProductForm } from "@/components/CreateProduct";
import { InvalidUserMessage } from "@/components/InvalidUserMessage";

import * as S from './styles';

export const CreateProductPageSection = () => {
  const [isUserValid, setIsUserValid] = useState(false);

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

  const validateToken = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      const response = await validateUser(token);
      console.log(response);

      if (response && response.statusCode === 200) {
        setIsUserValid(true);
      } else {
        setIsUserValid(false);
      }
    }
  }

  const detailedStructure = [
    "Nome", "Detalhes: Marca, Modelo, Cor...", "Preço"
  ];

  const manyProductsStructure = [
    "Nome", "Marca", "Modelo", "Cores e Preços"
  ];

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
            onClick={onCreateSimpleProduct}
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
        </>
      )}
    </S.Container>
  );
};
