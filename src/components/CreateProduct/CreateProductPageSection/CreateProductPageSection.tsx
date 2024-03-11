'use client';

import { useState, useEffect} from "react";
import {
  useCreateDetailedProduct,
  useCreateSimpleProduct,
  useCreateManyProducts
} from "@/hooks";
import { validateUser } from "@/api";

import {
  CreateProductPageCard,
  SimpleProductForm,
  DetailedProductForm,
  BulkProductForm
} from "@/components/CreateProduct";
import { InvalidUserMessage } from "@/components/InvalidUserMessage";

import * as S from './styles';

export const CreateProductPageSection = () => {
  const [isUserValid, setIsUserValid] = useState(true);

  const {
    simpleFormMessage,
    isSimpleFormOpen,
    isSimpleFormDataValid,
    closeSimpleForm,
    simpleFormHandleChange,
    onCreateSimpleProduct,
    openSimpleForm
  } = useCreateSimpleProduct();

  const {
    detailedFormMessage,
    isDetailedFormOpen,
    isDetailedFormDataValid,
    closeDetailedForm,
    detailedFormHandleChange,
    onCreateDetailedProduct,
    openDetailedForm
  } = useCreateDetailedProduct();

  const {
    bulkFormMessage,
    bulkProductsContainerMessage,
    isBulkFormOpen,
    isBulkFormDataValid,
    isCreationButtonAbled,
    closeBulkForm,
    bulkFormHandleChange,
    addProduct,
    simpleProducts,
    onCreateManyProducts,
    openBulkForm
  } = useCreateManyProducts();

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
            productsContainerMessage={bulkProductsContainerMessage}
            isFormOpen={isBulkFormOpen}
            isFormDataValid={!isBulkFormDataValid()}
            isCreationButtonAbled={!isCreationButtonAbled()}
            closeForm={closeBulkForm}
            onChange={bulkFormHandleChange}
            onConfirm={addProduct}
            simpleProducts={simpleProducts}
            onCreate={onCreateManyProducts}
          />

          <CreateProductPageCard
            title="Produto Simples"
            description="Crie um produto de forma rápida e fácil."
            image="/assets/images/simpleProduct.png"
            onClick={openSimpleForm}
          />

          <CreateProductPageCard
            title="Produto Detalhado"
            description="Crie um produto com informações detalhadas."
            image="/assets/images/detailedProduct.png"
            onClick={openDetailedForm}
          />

          <CreateProductPageCard
            title="Criar Produtos"
            description="Crie vários produtos de uma vez."
            image="/assets/images/manyProducts.png"
            onClick={openBulkForm}
          />
        </>
      )}
    </S.Container>
  );
};
