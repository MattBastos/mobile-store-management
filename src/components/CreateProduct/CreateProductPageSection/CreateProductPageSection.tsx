'use client';

import { useCreateSimpleProduct } from "@/hooks";

import { CreateProductPageCard } from "@/components/CreateProduct";
import { SimpleProductForm } from "@/components/CreateProduct/CreateProductPageForms";

import * as S from './styles';

export const CreateProductPageSection = () => {
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

  const detailedStructure = [
    "Nome", "Detalhes: Marca, Modelo, Cor...", "Preço"
  ];

  const manyProductsStructure = [
    "Nome", "Marca", "Modelo", "Cores e Preços"
  ];

  return (
    <S.Container>
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
    </S.Container>
  );
};
